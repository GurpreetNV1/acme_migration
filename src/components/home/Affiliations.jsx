import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Affiliations() {
    const images = [
        { src: "/images/MA.png", alt: "MA" },
        { src: "/images/PIER.png", alt: "PIER" },
        { src: "/images/RC.jpg", alt: "RC" },
        { src: "/images/RS.jpg", alt: "RS" },
        { src: "/images/QEAC.jpg", alt: "QEAC" },
        { src: "/images/Medibank.png", alt: "Medibank" },
        { src: "/images/NIB.png", alt: "NIB" },
        { src: "/images/Allianz.png", alt: "Allianz" },
        { src: "/images/MARA.jpg", alt: "MARA" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
            {/* Title */}
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl font-bold text-center">
                    Affiliations and Accreditations
                </h2>
            </div>

            <div className="my-12">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={0}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 },
                    }}
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <div className="border border-gray-200 bg-white w-full h-full overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="block w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Affiliations;
