import React, { useState, useEffect } from "react";

const UserTypeToggle = ({ activeType, onToggle }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // The header is typically around 80px-100px. 
            // We want this to stick when it reaches the top (offset by header height).
            // Adjust offset based on actual Header height (usually ~80px).
            const offset = window.scrollY;
            setIsSticky(offset > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full z-40 transition-all duration-300 ${isSticky
                    ? "fixed top-[80px] left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm py-4 border-b border-gray-100"
                    : "relative py-6 bg-transparent"
                }`}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <div className="bg-gray-100 p-1 rounded-full inline-flex relative">
                    {/* Slider Background */}
                    <div
                        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out transform ${activeType === "merchant" ? "translate-x-0" : "translate-x-full left-1"
                            }`}
                    />

                    <button
                        onClick={() => onToggle("merchant")}
                        className={`relative z-10 px-8 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none ${activeType === "merchant" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        Business
                    </button>
                    <button
                        onClick={() => onToggle("customer")}
                        className={`relative z-10 px-8 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none ${activeType === "customer" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        Customer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserTypeToggle;
