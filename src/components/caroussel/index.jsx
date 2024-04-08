import React, { useState } from "react";

export const Caroussel = ({ picture }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % picture.length;
        setCurrentIndex(newIndex);
    }

    const previousSlide = () => {
        const newIndex = (currentIndex - 1 + picture.length) % picture.length;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="caroussel">
            <img className="caroussel__cover" src={picture[currentIndex]} alt="" />
            <svg onClick={nextSlide} className="caroussel__arrowRight" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_288610_254)">
                    <path d="M6.48999 21.0106L8.25999 22.7806L18.16 12.8806L8.25999 2.98059L6.48999 4.75059L14.62 12.8806L6.48999 21.0106Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_288610_254">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.880615)" />
                    </clipPath>
                </defs>
            </svg>
            <svg onClick={previousSlide} className="caroussel__arrowLeft" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.51 4.75064L15.74 2.98064L5.83995 12.8806L15.7399 22.7806L17.5099 21.0106L9.37995 12.8806L17.51 4.75064Z" fill="white" />
            </svg>
            <span className="caroussel__actualSlide">{`${currentIndex + 1} / ${picture.length}`}</span>
        </div>
    )
};