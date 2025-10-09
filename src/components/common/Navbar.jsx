import { BsChatLeftTextFill } from "react-icons/bs";

const Navbar = () => {
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
  return (
    <>
      <nav className="mx-auto max-w-[1280px] border border-black p-2">
        <div className="w-full h-full flex justify-between">
          <div className="max-w-[180px] w-full">
            <img src="/images/acme-header-logo.png" alt="acme_logo" />
          </div>
          <div className="flex items-center gap-5 text-lg font-[500]">
            <a className="hover:cursor-pointer">Home</a>
            <a className="hover:cursor-pointer">Migration</a>
            <a className="hover:cursor-pointer">Study Overseas</a>
            <a className="hover:cursor-pointer">Visitor Visa</a>
            <a className="hover:cursor-pointer">Others</a>
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
