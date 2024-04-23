// import { useNavigate } from "react-router-dom";
// import { FaGreaterThan } from "react-icons/fa";
// import { HeaderData } from "./HeaderData";
// import HeaderCard from "./HeaderCard";
// import { useTitle } from "./useTitle";

// export const Home = () => {
//   useTitle("Home");
//   const navigate = useNavigate();

  
//   const handleGetStarted = () => {
//     navigate('/blog'); 
//   };

//   return (
//     <>
//       <div className="mt-20">
//         <div className="flex justify-center items-center flex-col gap-12">
//           <h1 className=""></h1>
//           <span className="text-xl sm:text-3xl font-lum">
//             Yours Words We Posts.
//           </span>
//           <button
//             onClick={handleGetStarted} 
//             className="font-display text-lg sm:text-2xl bg-indigo-500 rounded-lg py-2 px-8 hover:bg-indigo-600 text-white"
//           >
//             <span className="flex flex-row gap-2 justify-center items-center">
//               Get Started <FaGreaterThan />
//             </span>
//           </button>
//           <span className="text-gray-500 font-mono text-lg tracking-wide px-5">
//             Express Your Thoughts Through writing here.
//           </span>
//         </div>
//         <hr className="h-1 bg-gray-300 mt-5 sm:mt-14 md:mt-24 lg:mt-30 xl:mt-20 mx-16" />
//       </div>
//       <div className="mt-4 mx-10 lg:mx-60">
//         {HeaderData.map((value, index) => {
//           return (
//             <HeaderCard
//               key={index}
//               content1={value.content1}
//               content2={value.content2}
//               title={value.title}
//             />
//           );
//         })}
//       </div>
//       <hr className="h-1 bg-gray-300 my-10 mx-10 md:mx-20" />
//     </>
//   );
// };




import { useNavigate } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { HeaderData } from "./HeaderData";
import HeaderCard from "./HeaderCard";
import { useTitle } from "./useTitle";

export const Home = () => {
  useTitle("Home");
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/profile');
  };

  return (
    <>
      <div className="mt-20">
        <div className="flex justify-center items-center flex-col gap-12">
          <h1 className=""></h1>
          <span className="text-xl sm:text-3xl font-lum">
            Yours Words We Posts.
          </span>
          <button
            onClick={handleGetStarted} 
            className="font-display text-lg sm:text-2xl bg-indigo-500 rounded-lg py-2 px-8 hover:bg-indigo-600 text-white"
          >
            <span className="flex flex-row gap-2 justify-center items-center">
              Get Started <FaGreaterThan />
            </span>
          </button>
          <span className="text-gray-500 font-mono text-lg tracking-wide px-5">
            Express Your Thoughts Through writing here.
          </span>
        </div>
        <hr className="h-1 bg-gray-300 mt-5 sm:mt-14 md:mt-24 lg:mt-30 xl:mt-20 mx-16" />
      </div>
      <div className="mt-4 mx-10 lg:mx-60">
        {HeaderData.map((value, index) => {
          return (
            <HeaderCard
              key={index}
              content1={value.content1}
              content2={value.content2}
              title={value.title}
            />
          );
        })}
      </div>
      <hr className="h-1 bg-gray-300 my-10 mx-10 md:mx-20" />
    </>
  );
};
