from flask import Flask, request, jsonify, make_response, session
import jwt
from datetime import datetime, timedelta
from functools import wraps

app = Flask(__name__)

app.config['SECRET_KEY'] = '6cf9c9f294537910b3cbca07d0b6a2a94ce43d9aabb632e291e434d07709f482'

# Dictionary to store user credentials
users = {
    'user1': {'password': 'password1'},
    'user2': {'password': 'password2'}
}

def token_required(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        token = request.args.get('token')
        if not token:
            return jsonify({'message': 'Token is missing!'}), 403
        try:
            payload = jwt.decode(token, app.config['SECRET_KEY'])
            # You can do something with the payload here if needed
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Expired Token!'}), 403
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Invalid Token!'}), 403
        return func(*args, **kwargs)
    return decorated

@app.route('/auth')
@token_required
def auth():
    return "Verified JWT. Welcome!"

@app.route("/")
def home():
    if not session.get('logged_in'):
        return jsonify({'message': 'You are not logged in.'}), 401
    else:
        return jsonify({'message': 'Currently logged in.'}), 200

@app.route('/public')
def public():
    return jsonify({'message': 'This is public.'}), 200

@app.route("/login", methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    # Check if username and password match
    if username in users and users[username]['password'] == password:
        session['logged_in'] = True
        token = jwt.encode({'user': username, 'exp': datetime.utcnow() + timedelta(minutes=30)}, app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('utf-8')}), 200
    else:
        return jsonify({'message': 'Invalid username or password!'}), 401

if __name__== "__main__":
    app.run(port=5000, debug=True)
