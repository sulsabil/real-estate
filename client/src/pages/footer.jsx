import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
} from "../redux/user/userSlice";
import {FiTwitter,FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram,AiOutlineYoutube,AiFillGithub} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Footer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/sign-out");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
  return (
    <section className="py-20 bg-gray-900">
      
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="pb-8 mb-15 border-b border-gray-700 items-center">
            <div className="flex flex-warp mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0 items-center flex">
                <img
                  src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-real-estate-logo-design-png-image_5553508.jpg"
                  alt="Your Logo"
                  className="h-8 w-auto mr-2 rounded-full"
                />
                <a
                  href="/Home"
                  className="font-bold text-sm sm:text-xl flex flex-wrap text-white"
                >
                  ঘরবাড়ি
                </a>
              </div>
            
              <div className="w-full lg:w-1/2 px-4">
                <div className="items center">
                {!currentUser && (
                  <div className="sm:flex lg:justify-end items-center">
                    <span className="hidden sm:inline-block mr-2 font-bold text-sm sm:text-xl flex flex-wrap text-white">
                      Ready to Get Collaborate
                    </span>
                   
                      <button
                        type="button"
                        className="text-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2"
                      >
                        <Link to="/sign-in">Sign IN</Link>
                      </button>
                
                  </div> )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-warp mb-5 p-10 lg:mx-6 items-center justify-center">
            <div className="px-6 mb-5">
              <a
                href="/about"
                className="text-gray-300 hover:text-gray-200 inline-block text-center"
              >
                About
              </a>
            </div>
            <div className="px-6 mb-5">
              <a
                href="/search"
                className=" text-center text-gray-300 hover:text-gray-200 inline-block"
              >
                Search for Sell and Rent
              </a>
            </div>
            <div className="px-6 mb-5">
              {currentUser ? (
                <a
                  href=""
                  onClick={handleSignOut}
                  className="text-gray-300 hover:text-gray-200 inline-block text-center"
                >
                  Sign Out
                </a>
              ) : (
                <a
                  href="/sign-up"
                  className="text-gray-300 hover:text-gray-200 inline-block text-center"
                >
                  Create Your Profile
                </a>
              )}
            </div>
            <div className="px-6 mb-5">
              {currentUser ? (
                <a
                  href="/create-listing"
                  className="text-gray-300 hover:text-gray-200 inline-block text-center"
                >
                  Create Your Post
                </a>
              ) : (
                <a
                  href="/sign-in"
                  className="text-blue-500 hover:text-blue-700 inline-block text-center"
                >
                  Sign In to Create Your Post
                </a>
              )}
            </div>
            <div className="px-6 mb-5">
              <a
                href="/profile"
                className="text-gray-300 hover:text-gray-200 inline-block text-center"
              >
                Profile
              </a>
            </div>
          </div>
         
          <div className="mt-15 text-center justify-center">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
              © 2023{" "}
              <a href="/Home" className="hover:underline">
                ঘরবাড়ি™
              </a>
              . All Rights Reserved.
            </span>
           
          </div>
         
        </div>
      </div>
      <div className="icons flex items-center space-x-4 justify-center mt-4">
                <FiTwitter size={"1rem"}/>
                <AiOutlineInstagram size={"1.5rem"}/>
                <AiOutlineYoutube size={"1.5rem"}/>
                <FiFacebook size={"1rem"}/>
              
          </div>
    </section>
  );
}
