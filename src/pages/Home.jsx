import Affiliations from "../components/home/Affiliations";
import ExperienceHighlights from "../components/home/ExperienceHighlights";
import Global from "../components/home/Global";
import Whoweare from "../components/home/WhoWeAre";

function Home() {
    return ( 
        <>
            <Whoweare />
            <ExperienceHighlights />
            <Affiliations/>
            <Global/>
        </>
     );
}

export default Home;