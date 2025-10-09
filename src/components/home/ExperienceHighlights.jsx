function ExperienceHighlights() {
    const highlights = [
        { text: "Over 10 Years of Exceptional Experience", icon: "fa-solid fa-graduation-cap" },
        { text: "TPIER Qualified Educational Councellors", icon: "fa-solid fa-globe" },
        { text: "5000+ Successful Students Placements", icon: "fa-solid fa-users" },
        { text: "RMA Methodical Assessment of Complex Profiles", icon: "fa-solid fa-certificate" },
    ];

    return (
        <div className="max-w-7xl mx-auto my-24 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                {highlights.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-gray-100 rounded-full shadow-sm overflow-hidden border-r-8 border-orange-500"
                    >
                        {/* Orange Icon Circle */}
                        <div className="bg-orange-500 flex items-center justify-center w-18 h-18 rounded-full flex-shrink-0">
                            <i className={`${item.icon} text-white text-3xl`}></i>
                        </div>

                        {/* Text */}
                        <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl font-normal ml-4 mr-4">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceHighlights;
