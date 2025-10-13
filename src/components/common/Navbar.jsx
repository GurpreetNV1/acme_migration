import { BsChatLeftTextFill } from "react-icons/bs";
import MenuItem from "./MenuItem";

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
  return (
    <nav className=" fixed top-0 left-0 w-full z-[100]  px-4 py-1 bg-white/50 backdrop-blur-xl">
      <div className="flex mx-auto justify-between max-w-[1280px] items-center">
        {/* Logo */}
        <div className="max-w-[180px] min-w-[180px] w-full">
          <img
            src="/images/acme-header-logo.png"
            alt="acme_logo"
            className="w-full h-auto"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2 text-gray-800">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>

        {/* Contact Info */}
        <div className="w-[200px] flex justify-end items-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="size-[30px] flex items-center justify-center">
            <BsChatLeftTextFill className="size-[18px] md:size-[25px] text-primary" />
          </div>
          <div className="flex flex-col ml-3">
            <p className="text-sm font-semibold text-gray-800">Contact Us</p>
            <p className="text-sm text-primary font-medium">+61 479171282</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
