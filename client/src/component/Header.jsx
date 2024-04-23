import { NavLink,  useNavigate  } from "react-router-dom";
import "animate.css";
import "./index1.css";
import { SearchBar } from "./SearchBar";



const Header = () => {
  const navi = useNavigate();
  return (
    <>
      <header className="flex flex-wrap select-none flex-row justify-between items-center md:m-3 m-2 z-10">
        <div className="flex flex-row flex-wrap gap-2 justify-center items-center">
          <NavLink to={"/"}>
          </NavLink>
          <SearchBar />
        </div>
        <nav className="flex flex-row justify-center gap-5 items-center">
          <div
            className={
              "font-meri text-base hidden md:visible items-start justify-start md:flex flex-row gap-7"
            }
          >
            <NavLink to={"/"}>
                  Home
            </NavLink>
            <NavLink to="/about">
                  About
            </NavLink>
            <NavLink to="/blog">
                  Blogs
            </NavLink>
            <NavLink to="/developer">
                  Developers
            </NavLink>
          </div>

          <div className="flex flex-wrap flex-row justify-center items-center gap-2 text-xs md:text-sm">
              <>
                {/* <button
                  className="font-meri border-2 border-black py-2 px-5 rounded-md hover:bg-gray-100"
                  onClick={() => {
                    navi("/login");
                  }}
                >
                  Login
                </button>
                <button
                  className="font-meri border-2 border-black py-2 px-5 rounded-md bg-black text-white hover:bg-slate-700"
                  onClick={() => {
                    navi("/signup");
                  }}
                >
                  Sign Up
                </button> */}
              </>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
