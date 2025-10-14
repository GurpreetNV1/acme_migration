function Mission() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Section - Text */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-justify text-sm sm:text-base">
            For the last 25 years, we have helped students, business persons,
            tourists, and clients with medical needs. Our dedicated team works
            tirelessly to make the visa process smooth and stress-free. We
            believe in providing expert guidance and personalized support to
            ensure every client achieves their goal. Whether it’s studying,
            working, or settling abroad — we are here to help you every step of
            the way with honesty, care, and professionalism.
          </p>
          <button className="bg-primary hover:bg-primary text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
            Read More
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Aboutvideo.jpg"
            alt="Our Mission"
            className="rounded-xl shadow-md w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Mission;
