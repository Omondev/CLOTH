import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "../components/HappyCostumers.css";

const HappyCustomers = () => {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleReviews, setVisibleReviews] = useState([]);

    useEffect(() => {
        fetch("https://www.e-commerce-api-v2.nt.azimumarov.uz/api/v1/reviews")
            .then((response) => response.json())
            .then((data) => {
                setReviews(data.reviews);
                setVisibleReviews(data.reviews.slice(0, 3));
            })
            .catch((error) => console.error("Error fetching reviews:", error));
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? Math.max(0, reviews.length - 3) : prevIndex - 3;
            setVisibleReviews(reviews.slice(newIndex, newIndex + 3));
            return newIndex;
        });
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 3 < reviews.length ? prevIndex + 3 : 0;
            setVisibleReviews(reviews.slice(newIndex, newIndex + 3));
            return newIndex;
        });
    };

    return (
        <div className="customers">
            <div className="container customers__container">
                <div className="customers__content">
                    <h2 className="customers__title">OUR HAPPY CUSTOMERS</h2>
                    <div className="customers__button">
                        <button className="customers__btn" onClick={handlePrevClick}>
                            <ChevronLeft size={24} />
                        </button>
                        <button className="customers__btn" onClick={handleNextClick}>
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
                <div className="customers__content2">
                    {visibleReviews.length > 0 &&
                        visibleReviews.map((review, index) => (
                            <div key={index} className="customers__card">
                                <p className="customers__stars">
                                    {Array.from({ length: review.stars }).map((_, i) => (
                                        <Star key={i} size={16} color="gold" />
                                    ))}
                                </p>
                                <div className="customers__block">
                                    <h3 className="customers__reviewer-name">{review.reviewerName}</h3>
                                </div>
                                <p className="customers__comment">{review.comment}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default HappyCustomers;
