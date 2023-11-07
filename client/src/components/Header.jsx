import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="flex items-center mb-4 sm:mb-0 ">
        <img
    src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-real-estate-logo-design-png-image_5553508.jpg"
    alt="Your Logo"
    className="h-10 w-auto mr-2 rounded-full"
  />
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">ঘর</span>
            <span className="text-slate-700">বাড়ি</span>
          </h1>
        </Link>
<ul className="flex gap-4">
{currentUser && currentUser.role === 'admin' && (
        <Link to="/dashboard">
          <li className="hidden sm:inline text-slate-700 hover:underline">
            Dashboard
          </li>
        </Link>
      )}
</ul>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link
            to={currentUser ? "/profile" : "/sign-in"}
            className="flex items-center"
          >
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <span className="text-slate-700 hover:underline">Sign in</span>
            )}
          </Link>
         
        </ul>
      </div>
    </header>
  );
}
