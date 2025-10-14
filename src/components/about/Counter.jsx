import CountUp from "react-countup";

function Counter() {
  const stats = [
    { end: 25, suffix: "K+", label: "Happy Clients & Students" },
    { end: 80, suffix: "+", label: "Countries Affiliation" },
    { end: 360, suffix: "", label: "Top University Partner" },
    { end: 23, suffix: "k+", label: "Visa & Immigration" },
  ];

  return (
    <div className="relative w-full py-24 my-12 bg-[url('/images/AboutBG.jpg')] bg-cover bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-primary">
              <CountUp start={0} end={stat.end} duration={2} suffix={stat.suffix} />
            </h2>
            <p className="mt-2 text-base sm:text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
