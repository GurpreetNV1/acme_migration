import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsChatLeftTextFill } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import { X } from "lucide-react";
import MenuItem from "./MenuItem";
import MobileMenuItem from "./MobileMenuItem";
import { MdCall } from "react-icons/md";
const menuItems = [
  { label: "Home", url: "/" },
  {
    label: "Migration",
    subItems: {
      "Graduate Visa": {
        "Temporary Graduate Visa-Subclass 485": "/temporary-graduate-visa-subclass-485",
        "Post Study Work Visa-Subclass 485": "/post-study-work-visa-subclass-485",
      },
      "Permanent Visa": {
        "Skilled Independent Visa-Subclass 189": "/skilled-independent-visa-subclass-189",
        "Skilled Nominated Visa-Subclass 190": "/skilled-nominated-visa-subclass-190",
      },
      "Regional Visa": {
        "Permanent Residence (Skilled Regional) Visa-Subclass 191": "/permanent-residence-skilled-regional-visa-subclass-191",
        "Skilled Work Regional (Provisional) Visa-Subclass 491": "/skilled-work-regional-provisional-visa-subclass-491",
      },
    },
  },
  {
    label: "Study Overseas",
    subItems: {
      "Study in Australia": {
        "Australia Basics": "/study-in-australia",
        "Earning And Spending": "/earning-and-spending-in-australia",
        "Education System": {
          Admission: "/admission-in-australia",
          "Change Course": "/change-course-in-australia",
          "Recognition Prior Learning": "/recognition-of-prior-learning-in-australia",
          "Professional Year Program": "/professional-year-program",
          "Request to Defer your Studies": "/request-to-defer-your-studies",
          "Popular Courses": "/popular-courses-in-australia",
        },
        "Student Visa": {
          "Student Visa Process": "/australia-student-visa-admission-process",
          "Student Dependent Visa-Subclass 500": "/student-dependent-visa-subclass-500",
          "Student Visa Extension": "/student-visa-extension-australia",
          "Student Guardian Visa-Subclass 590": "/student-guardian-visa-subclass-590",
          "Subsequent Visa to Student Visa": "/student-subsequent-visa-to-student-visa",
          "Student Visa Information": "/student-visa-information",
          "Training Visa-Subclass 407": "/training-visa-subclass-407",
        },
        Other: {
          "Master to Diploma Student Visa-Subclass 500": "/master-to-diploma-student-visa-subclass-500",
          "Dependent Visa to Student Visa-Subclass 500": "/dependent-visa-to-student-visa-subclass-500",
        },
      },
      "Study in Canada": {
        "Canada Basics": "/study-in-canada",
        "Earning And Spending": "/earning-and-spending-in-canada",
        "Education System": "/education-system-in-canada",
        "Student Visa Process": "/canada-student-visa-process",
      },
      "Study in New Zealand": {
        "New Zealand Basics": "/study-in-new-zealand",
        "Earning And Spending": "/earning-and-spending-in-new-zealand",
        "Education System": "/education-system-in-new-zealand",
        "Student Visa Process": "/new-zealand-student-visa-process",
      },
      "Study in UK": {
        "UK Basics": "/study-in-uk",
        "Earning And Spending": "/earning-and-spending-in-uk",
        "Education System": "/education-system-in-uk",
        "Student Visa Process": "/uk-student-visa-process",
      },
    },
  },
  {
    label: "Visitor Visa",
    subItems: {
      "Family Sponsored Visa": "/family-sponsored-visa",
      "Work and Holiday Visa-Subclass 462 & 417": "/work-and-holiday-visa-subclass-462-417",
    },
  },
  {
    label: "Others",
    subItems: {
      "Business Visa": "/business-visa",
      "Family Visa": {
        "Partner Visa-Subclass 309,820,100,101": "/partner-visa",
        "Parents Visa-Subclass 804, 864, 884, 103, 143, 173": "/parents-visa",
      },
      Insurance: {
        Allianz: "https://api.allianz.com/myquote/1?groupId=55318",
        Iman: "https://www.austhealth.com/",
      },
    },
  },
];


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll Lock for mobile menu
  useEffect(() => {
    document.documentElement.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleNavigate = (url) => {
    navigate(url);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    {/* Desktop View */}
      <nav className="hidden lg:block fixed top-0 left-0 w-full z-[100] px-4 py-4 bg-white/50 backdrop-blur-xl shadow-sm">
        <div className="flex mx-auto justify-between max-w-[1280px] items-center">
          {/* Logo */}
          <div className="max-w-[180px] min-w-[180px] w-full">
            <img
              src="/images/acme-header-logo.png"
              alt="acme_logo"
              className="w-full h-auto"
              onClick={()=>navigate("/")}
            />
          </div>

          {/* Nav Items */}
          <div className="flex items-center gap-6 text-gray-800">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex justify-end items-center cursor-pointer transition-opacity">
            <div className="flex flex-col ml-3">
              <div onClick={()=>navigate('/contact')}>
              <button className="bg-primary hover:cursor-pointer hover:opacity-80  text-white px-5 py-3 rounded-xl">
                Contact Us
              </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile View*/}
      <nav className="lg:hidden w-full fixed top-0 bg-white/80 backdrop-blur-xl left-0 py-4 z-40 px-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="max-w-[130px] min-w-[130px] w-full">
            <img
              src="/images/acme-header-logo.png"
              alt="acme_logo"
              className="w-full h-auto"
              onClick={()=>navigate("/")}
            />
          </div>
          <div>
          
          <button
            onClick={() => navigate('/contact')}
            className="p-2 hover:bg-orange-50 rounded-lg transition-colors"
          >
            <MdCall className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 hover:bg-orange-50 rounded-lg transition-colors"
          >
            <LuMenu className="w-6 h-6 text-[#000000]" />
          </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-[85%] max-w-[380px] h-screen bg-[#0d1117] z-40 shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0d1117] backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-[#30363d]">
          <h2 className="text-white font-bold text-lg">Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-[#ff8c00]/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-[#ffffff]" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="pt-2 pb-8 overflow-y-auto max-h-[calc(100vh-80px)]">
          {menuItems.map((item, index) => (
            <MobileMenuItem
              key={index}
              item={item}
              depth={0}
              onNavigate={handleNavigate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
