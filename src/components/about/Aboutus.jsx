function Aboutus() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-12">

        {/* Left Image Section */}
        <div className="flex-1 flex justify-center relative w-full">
          <img
            src="/images/AboutSection.jpg"
            alt="About our team"
            className="rounded-lg shadow-md object-cover w-full max-w-3xl h-[380px] sm:h-[420px] lg:h-[460px]"
          />

          {/* ISO Certified Badge */}
          <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 w-[220px] flex items-center gap-3">
            <i className="fa-solid fa-circle-check text-primary text-2xl"></i>
            <div>
              <p className="font-semibold text-gray-800">ISO Certified</p>
              <p className="text-sm text-gray-500">1990–2000</p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <p className="uppercase text-[0.7rem] sm:text-sm text-gray-400 font-semibold underline mb-4">
            About Acme Migration
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            <span className="text-primary">09+</span> Years of Trust
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10 text-sm sm:text-base text-justify">
            With a team of experienced migration agents and education counselors,
            we strive to deliver the best results for you. With extensive
            knowledge and expertise in relevant Migration Laws and Policies, our
            team is well equipped with all the expertise, legalities, and
            relevant legislation to ensure a smooth journey for yourself and
            your family towards permanent residency in Australia.
          </p>

          {/* Icons Section */}
          <div className="flex flex-col sm:flex-row gap-8 justify-start sm:justify-center lg:justify-start">
            {/* Icon 1 */}
            <div className="flex items-start gap-3 justify-start sm:justify-center lg:justify-start">
              <i className="fa-solid fa-handshake text-primary text-3xl"></i>
              <div className="text-left">
                <h3 className="font-bold text-gray-800">Trusted by Millions</h3>
                <p className="text-gray-600 text-sm">
                  Most trusted & recommended <br /> by millions of students
                </p>
              </div>
            </div>

            {/* Icon 2 */}
            <div className="flex items-start gap-3 justify-start sm:justify-center lg:justify-start">
              <i className="fa-solid fa-trophy text-primary text-3xl"></i>
              <div className="text-left">
                <h3 className="font-bold text-gray-800">Awards Winner</h3>
                <p className="text-gray-600 text-sm">
                  Most trusted & <br /> recommended by millions of students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Paragraph Section */}
      <div className="mt-16 space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
        <p>
          Engage us as your Migration Professionals and you’ll get a friendly,
          smart and strategic team on your side with 8+ years of experience
          amongst us. We think outside the square and we often come up with
          solutions others don’t think of. We say, “if we ain’t have a Visa
          solution, no one else would either”!
        </p>

        <p>
          From helping students to get admission in the best University to
          helping them in getting Permanent residency, we do it all. We have
          access to some of the best Universities, VET colleges and institutes
          in Australia. We exert ourselves to underline the needs and dreams of
          individual clients and suggesting them best courses and providers to
          ensure they achieve the skills and knowledge to succeed in their
          respective careers.
        </p>

        <p>
          We provide a full range of Australian Immigration Law services,
          including reviews of adverse decisions, character submissions, health
          waiver applications and appeals of citizenship refusals.
        </p>

        <p>
          Our business stands on the success of our clients and our ethical
          services assist you in executing your plans to build a better future.
        </p>
      </div>
    </section>
  );
}

export default Aboutus;
