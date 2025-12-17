import FAQs from "../../others/Faq";
import RatingPage from "../RatingPage";
import ACService from "./ACService";
import RefrigeratorService from "./RefrigeratorService";
import ServicesUI from "./ServicesUI";
import WashingMachineService  from "./WashingMachineService";
import "./Services.css"

const ServicesMain = () => {
    return (
        <>
            <div className="hero-container">
                <div className="hero-left">
                <h1>Professional AC Services You Can Trust</h1>
                <p>
                    Fast • Affordable • Expert Technicians • Guaranteed Satisfaction
                </p>

                <ul className="hero-points">
                    <li>✔ Same Day Service</li>
                    <li>✔ 100% Verified Technicians</li>
                    <li>✔ Lowest Prices Guaranteed</li>
                </ul>
                </div>
                <div className="hero-image animate-right">
                    <img
                    src="https://tse3.mm.bing.net/th/id/OIP.g0mlkFmfTllLDtmDZCT3VgHaE8?pid=Api&P=0&h=180"
                    alt="Electrician working"
                    />
                </div>
            </div>


            <ServicesUI/>
            <ACService/>
            <WashingMachineService/>
            <RefrigeratorService/>

            <br /><hr /><br />
            <RatingPage/>
            <FAQs/>
        </>            
    )
}

export default ServicesMain;