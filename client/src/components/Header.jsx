import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Header({ changeSidebar }) {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className=" bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl lg:text-2xl flex flex-wrap">
            <span className="text-slate-500">Lightnin</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center "
        >
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none  w-20 sm:w-64 "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <div>
          <ul className="sm:flex gap-4 pl-6">
            <Link to="/">
              <li className="hover:text-slate-500 hover:cursor-pointer hidden sm:block">
                Home
              </li>
            </Link>
            <Link to="about">
              <li className="hover:text-slate-500 hover:cursor-pointer hidden sm:block">
                About
              </li>
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="rounded-full h-8 w-8 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <li className="hover:text-slate-500 hover:cursor-pointer">
                  Sign in
                </li>
              )}
            </Link>
          </ul>
          {/* <GiHamburgerMenu
            onClick={changeSidebar}
            className="sm:hidden text-slate-600 active:text-slate-300"
          /> */}
        </div>
      </div>
    </header>
  );
}
export default Header;
