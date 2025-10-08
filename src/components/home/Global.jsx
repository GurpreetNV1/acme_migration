function Global() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
            <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 md:gap-16 rounded-xl p-6">
                {/* Left content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-semibold">
                        We're Global Partners of <span className="text-amber-600">100+ Institutes</span>
                    </h2>
                    <p className="my-6 text-base text-zinc-600 leading-relaxed">
                        Discover the world of education through our extensive global network, as we proudly stand as a trusted partner of 100+ educational institutes. Unlock a multitude of academic opportunities and access top-notch institutions around the globe.
                    </p>
                    <button className="inline-flex items-center justify-center py-3 px-6 bg-amber-600 hover:bg-amber-700 transition-colors text-white rounded-lg font-medium gap-2">
                        More
                    </button>
                </div>

                {/* Right image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/images/mappoints.png"
                        alt="global"
                        className="w-full max-w-md md:max-w-lg object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default Global;
