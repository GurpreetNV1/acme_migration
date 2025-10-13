import Affiliations from "../components/home/Affiliations";
import Ethics from "../components/home/Ethics";
import ExperienceHighlights from "../components/home/ExperienceHighlights";
import Global from "../components/home/Global";
import Satisfaction from "../components/home/Satisfaction";
import Visaandimmigration from "../components/home/VisaandImmigration";
import Whoweare from "../components/home/WhoWeAre";

function Home() {
    return ( 
        <>
            <Visaandimmigration />
            <Satisfaction />
            <Whoweare />
            <ExperienceHighlights />
            <Affiliations/>
            <Global/>
            <Ethics />
        </>
     );
}

export default Home;

