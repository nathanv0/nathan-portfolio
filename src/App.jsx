import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <FeatureCards />
            <ShowcaseSection />
            <TechStack />
            <ExperienceSection />
            <Contact />
            <Footer />

        </>
    )
}
export default App
