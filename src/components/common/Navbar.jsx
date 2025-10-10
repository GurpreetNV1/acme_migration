import { useState } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";

const Navbar = () => {
  let hoverId = null;
  let subHoverId = null;
  const [hoverNavItem, setHoverNavItem] = useState(false);
  const [hoverSubNavItem, setHoverSubNavItem] = useState(false);
  const [hoverSubSubNavItem, setHoverSubSubNavItem] = useState(false);

  const migrationItems = ["Graduate Visa", "Permanent Visa", "Regional Visa"];
  const studyOverSeasItems = [
    "Study in Australia",
    "Study in Canada",
    "Study in New Zealand",
    "Study in UK",
  ];
  const visitorVisaItems = [
    "Family Sponsored Visa",
    "Work and Holiday Visa -subclass 462 & 467",
  ];
  const otherItems = ["Business Visa", "Family Visa", "Insurance"];
  console.log("hoverNavItem",hoverNavItem);
  console.log("hoverSubNavItem",hoverSubNavItem);
  return (
    <>
      <nav className="mx-auto max-w-[1280px]  p-2">
        <div className="w-full h-full flex justify-between">
          <div className="max-w-[180px] w-full">
            <img src="/images/acme-header-logo.png" alt="acme_logo" />
          </div>
          <div className="flex items-center gap-5 text-lg font-[500]">
            <div>
              <a className="hover:cursor-pointer">Home</a>
            </div>
            <div className="relative">
              <a
                onMouseEnter={() => setHoverNavItem(true)}
                onMouseLeave={() =>
                  (hoverId = setTimeout(() => setHoverNavItem(false), 200))
                }
                className="hover:cursor-pointer"
              >
                Migration
              </a>
              <div
                // original classes for dropdowns
                // className={`border-1 flex flex-col ${
                //   hoverNavItem ? "block" : "hidden"
                // } top-[10vh] bg-white border-red-500 w-[200px] absolute`}

                // temp classes with block display
                className={`border-1 flex flex-col top-[10vh] bg-white border-red-500 w-[200px] absolute`}
              >
                <div className="relative">
                  <a
                    onMouseEnter={() => setHoverSubNavItem(true)}
                    onMouseLeave={() =>
                      (subHoverId = setTimeout(() => setHoverSubNavItem(false), 200))
                    }
                    className="cursor-pointer"
                  >
                    Graduate Visa
                  </a>
                  <div
                    className={`border-1 flex flex-col -left-[12vw] bg-white border-blue-500 w-[12vw] absolute`}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <a className="hover:cursor-pointer">Study Overseas</a>
            </div>
            <div>
              <a className="hover:cursor-pointer">Visitor Visa</a>
            </div>
            <div>
              <a className="hover:cursor-pointer">Others</a>
            </div>
          </div>
          <div className="w-[200px] flex relative">
            <BsChatLeftTextFill className="size-[25px] text-orange-600 top-[50%] -translate-y-1/2 absolute left-0" />
            <div className="flex flex-col justify-center my-auto ml-[35px]">
              <p>Contact Us</p>
              <p>+61 479171282</p>
            </div>
          </div>
        </div>
      </nav>
      <div></div>
    </>
  );
};

export default Navbar;
