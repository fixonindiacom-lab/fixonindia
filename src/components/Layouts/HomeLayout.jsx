import FAQs from "../others/Faq";
import WhyChooseUs from "../others/WhyChooseUs";
import HeroSection from "../Pages/HeroSection";
import RatingPage from "../Pages/RatingPage";
import ServicesSection from "../Pages/Services/ServicesSection";
import ServicesUI from "../Pages/Services/ServicesUI";

const HomeLayout = () => {
    return (
        <>
            <HeroSection/>
            <ServicesUI/>
            <WhyChooseUs/>
            <RatingPage/>
            <FAQs/>
           
        </>
    );
};

export default HomeLayout;
