import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import {
  Home,
  PartnerVisa,
  ParentsVisa,
  WorkAndHolidayVisaSC462And417,
  BusinessVisa,
  FamilySponsoredVisa,
  UKStudentVisaProcess,
  UKEducationSystem,
  UKEarningAndSpending,
  UKBasics,
  NewZeaLandStudentVisaProcess,
  NewZeaLandEducationSystem,
  NewZeaLandEarningAndSpending,
  NewZeaLandBasics,
  CanadaStudentVisaProcess,
  CanadaEducationSystem,
  CanadaEarningAndSpending,
  CanadaBasics,
  DependentVisaToStudentVisaSC500,
  MastertoDiplomaStudentSC500,
  TrainingVisaSC407,
  StudentVisaInformation,
  SubsequentToStudentVisa,
  StudentGuardianVisaSC590,
  StudentVisaExtension,
  StudentDependentVisaSC500,
  StudentVisaProcess,
  AustraliaPopularCourses,
  AustraliaRequestToDeferYourStudies,
  AustraliaProfessionalYearProgram,
  AustraliaRecognitionPriorLearning,
  AustraliaChangeCourse,
  AustraliaAdmission,
  AustraliaEarningAndSpending,
  AustraliaBasics,
  SkilledWorkRegionalVisa,
  PermanentResidenceVisa,
  SkilledNominatedVisa,
  SkilledIndependentVisa,
  Contact,
  About,
  TemporaryGraduateVisa,
  PostStudyWorkVisa,
} from "./";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      // Migration
      {
        path: "temporary-graduate-visa-subclass-485",
        element: <TemporaryGraduateVisa />,
      },
      {
        path: "post-study-work-visa-subclass-485",
        element: <PostStudyWorkVisa />,
      },
      {
        path: "skilled-independent-visa-subclass-189",
        element: <SkilledIndependentVisa />,
      },
      {
        path: "skilled-nominated-visa-subclass-190",
        element: <SkilledNominatedVisa />,
      },
      {
        path: "permanent-residence-skilled-regional-visa-subclass-191",
        element: <PermanentResidenceVisa />,
      },
      {
        path: "skilled-work-regional-provisional-visa-subclass-491",
        element: <SkilledWorkRegionalVisa />,
      },
      // Study Overseas
      {
        path: "study-in-australia",
        element: <AustraliaBasics />,
      },
      {
        path: "earning-and-spending-in-australia",
        element: <AustraliaEarningAndSpending />,
      },
      {
        path: "admission-in-australia",
        element: <AustraliaAdmission />,
      },
      {
        path: "change-course-in-australia",
        element: <AustraliaChangeCourse />,
      },

      {
        path: "recognition-of-prior-learning-in-australia",
        element: <AustraliaRecognitionPriorLearning />,
      },
      {
        path: "professional-year-program",
        element: <AustraliaProfessionalYearProgram />,
      },
      {
        path: "request-to-defer-your-studies",
        element: <AustraliaRequestToDeferYourStudies />,
      },
      {
        path: "popular-courses-in-australia",
        element: <AustraliaPopularCourses />,
      },
      {
        path: "australia-student-visa-admission-process",
        element: <StudentVisaProcess />,
      },
      {
        path: "student-dependent-visa-subclass-500",
        element: <StudentDependentVisaSC500 />,
      },
      {
        path: "student-visa-extension-australia",
        element: <StudentVisaExtension />,
      },
      {
        path: "student-guardian-visa-subclass-590",
        element: <StudentGuardianVisaSC590 />,
      },
      {
        path: "student-subsequent-visa-to-student-visa",
        element: <SubsequentToStudentVisa />,
      },
      {
        path: "student-visa-information",
        element: <StudentVisaInformation />,
      },
      {
        path: "training-visa-subclass-407",
        element: <TrainingVisaSC407 />,
      },
      {
        path: "master-to-diploma-student-visa-subclass-500",
        element: <MastertoDiplomaStudentSC500 />,
      },
      {
        path: "dependent-visa-to-student-visa-subclass-500",
        element: <DependentVisaToStudentVisaSC500 />,
      },
      {
        path: "study-in-canada",
        element: <CanadaBasics />,
      },
      {
        path: "earning-and-spending-in-canada",
        element: <CanadaEarningAndSpending />,
      },
      {
        path: "education-system-in-canada",
        element: <CanadaEducationSystem />,
      },
      {
        path: "canada-student-visa-process",
        element: <CanadaStudentVisaProcess />,
      },
      {
        path: "study-in-new-zealand",
        element: <NewZeaLandBasics />,
      },
      {
        path: "earning-and-spending-in-new-zealand",
        element: <NewZeaLandEarningAndSpending />,
      },
      {
        path: "education-system-in-new-zealand",
        element: <NewZeaLandEducationSystem />,
      },
      {
        path: "new-zealand-student-visa-process",
        element: <NewZeaLandStudentVisaProcess />,
      },
      {
        path: "study-in-uk",
        element: <UKBasics />,
      },
      {
        path: "earning-and-spending-in-uk",
        element: <UKEarningAndSpending />,
      },
      {
        path: "education-system-in-uk",
        element: <UKEducationSystem />,
      },
      {
        path: "uk-student-visa-process",
        element: <UKStudentVisaProcess />,
      },
      // Visitor Visa
      {
        path: "family-sponsored-visa",
        element: <FamilySponsoredVisa />,
      },
      {
        path: "work-and-holiday-visa-subclass-462-417",
        element: <WorkAndHolidayVisaSC462And417 />,
      },
      // Other
      {
        path: "business-visa",
        element: <BusinessVisa />,
      },
      {
        path: "partner-visa",
        element: <PartnerVisa />,
      },
      {
        path: "parents-visa",
        element: <ParentsVisa />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
