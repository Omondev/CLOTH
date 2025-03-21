import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CheckCircle } from "lucide-react";
import "../components/Costumers.css";

const testimonials = [
    {
        name: "Sarah M.",
        review:
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        stars: 5,
    },
    {
        name: "Alex K.",
        review:
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        stars: 5,
    },
    {
        name: "James L.",
        review:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        stars: 5,
    },
];

const Costumers = () => {
    return (
        <section className="testimonials-container">
            <h2 className="testimonials-title">OUR HAPPY CUSTOMERS</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card">
                            <div className="stars">
                                {Array.from({ length: item.stars }).map((_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>
                            <h3 className="testimonial-name">
                                {item.name} <CheckCircle className="verified-icon" size={18} />
                            </h3>
                            <p className="testimonial-review">{item.review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Costumers;
