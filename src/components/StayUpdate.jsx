import "../components/HappyCostumers.css"

import { FiMail } from "react-icons/fi"; 


const StayUpdated = () => {


   
    return (
        <div className="stay-updated">
            <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
            <div className="subscribe">
                <FiMail className="mail-icon" />
                <input type="email" placeholder="Enter your email address" />
                <button>Subscribe to Newsletter</button>
            </div>
        </div>
    );
};

export default StayUpdated;