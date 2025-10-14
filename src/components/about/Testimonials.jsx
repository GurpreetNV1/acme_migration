import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function Testimonials() {
  const testimonials = [
    {
      name: "Minesh Shah",
      role: "Traveller",
      text: "Applying for a Canada visitor visa was made easy and seamless with the assistance of Acme Migration Services. Their knowledgeable team provided expert guidance and support, ensuring a successful visa application process.",
      rating: 5,
      visa: "Canada Visa",
    },
    {
      name: "Harry Patel",
      role: "Student",
      text: "Acme Migration Services provided exceptional support throughout my student visa application. Their expertise and personalized assistance made the process smooth and successful.",
      rating: 5,
      visa: "Australia Visa",
    },
    {
      name: "Tushar Chawla",
      role: "Student",
      text: "Acme Migration Services facilitated my student visa application for the UK with utmost professionalism and efficiency. Their expert guidance and meticulous support made the process smooth, resulting in a successful visa approval.",
      rating: 5,
      visa: "UK Visa",
    },
    {
      name: "Priya Desai",
      role: "Student",
      text: "The team guided me at every step of my visa process for Canada. Their professionalism and dedication helped me achieve my dream effortlessly.",
      rating: 5,
      visa: "Canada Visa",
    },
    {
      name: "Rohit Mehta",
      role: "Traveller",
      text: "Acme Migration Services made my travel visa experience quick and easy. I highly recommend their team for anyone planning to go abroad.",
      rating: 5,
      visa: "US Visa",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <p className="text-center text-[0.7rem] sm:text-sm text-gray-400 font-semibold underline mb-4">
        TESTIMONIALS
      </p>
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 leading-tight">
        What Clients Say About Us and <br /> Our Services
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[350px]">
              {/* Font Awesome quote icon */}
              <i className="fa-solid fa-quote-right absolute top-6 right-6 text-orange-400 text-2xl"></i>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{t.role}</p>
                <p className="italic text-gray-700 mb-6 leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              {/* Footer */}
              <div>
                <div className="flex items-center text-yellow-500 mb-2">
                  {Array(t.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
                <p className="text-gray-600 text-sm font-semibold">
                  ({t.visa})
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
