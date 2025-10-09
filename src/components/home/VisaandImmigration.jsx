function Visaandimmigration() {
    const services = [
        {
            icon: "fa-solid fa-plane-departure",
            title: "Migration",
            text: "Migrating to Australia is becoming an attractive option for more and more people.",
            image: "/images/NewImage.jpg",
        },
        {
            icon: "fa-solid fa-book",
            title: "Education",
            text: "Australia is a hot spot for International students across the world. It is currently home..",
            image: "/images/NewImage.jpg",
        },
        {
            icon: "fa-solid fa-briefcase",
            title: "Refusals / Appeals",
            text: "It is always very disappointing to have an application refused, and scary to have a..",
            image: "/images/NewImage.jpg",
        },
        {
            icon: "fa-solid fa-user-shield",
            title: "Health Insurance",
            text: "Purchasing and maintaining an active health insurance policy is a mandatory condition..",
            image: "/images/NewImage.jpg",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
            <p className="text-center text-[0.7rem] sm:text-sm text-gray-400 font-semibold underline mb-4">
                FEATURED SERVICES
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 leading-tight">
                We Provide Visa & Immigration Service <br /> From Experienced Lawyers
            </h2>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden border-b-4 border-primary hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover rounded-t-2xl"
                            />
                            {/* Icon Circle */}
                            <div className="absolute -bottom-8 left-6 bg-primary w-16 h-16 flex items-center justify-center rounded-full shadow-md">
                                <i className={`${service.icon} text-white text-2xl`}></i>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="pt-12 pb-6 px-6">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Visaandimmigration;
