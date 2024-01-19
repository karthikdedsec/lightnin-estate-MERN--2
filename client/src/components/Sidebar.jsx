const list = ["Home", "About", "Sign In"];

function Sidebar() {
  return (
    <div className="w-full bg-white sm:hidden shadow-xl">
      <div className="">
        <ul className="flex flex-col gap-2 ">
          {list.map((itm) => (
            <li className=" py-2 px-2" key={itm}>
              {itm}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
