function Whoweare() {
    return ( 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
            <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-10 lg:gap-16 rounded-xl p-6">
                {/* Left content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-3xl sm:text-5xl font-bold">
                        Who we are
                    </h2>
                    <p className="my-6 text-base text-zinc-600 leading-relaxed text-justify">
                        We are experienced migration agents and education counselors with expertise in Australian migration laws and policies. Our friendly and strategic team provides a full range of services, from helping students get into the best universities to obtaining permanent residency. We have access to some of the best educational institutions in Australia. With a client-centric approach, our experienced migration agents and education counselors are dedicated to understanding your unique needs and aspirations, guiding you towards a successful future in Australia.
                        We provide all Australian immigration law services including appeals of citizenship refusals. Our ethical services aim to help you build a better future.
                    </p>
                    <button className="inline-flex items-center justify-center py-3 px-6 bg-amber-600 hover:bg-amber-700 transition-colors text-white rounded-lg font-medium gap-2">
                        Read More
                    </button>
                </div>

                {/* Right image */}
                <div className="w-full lg:w-1/2 flex justify-center rounded-2xl">
                    <img
                        src="/images/Whoweare.png"
                        alt="global"
                        className="rounded-xl w-[100%] sm:w-[100%] md:w-[70%] lg:w-[100%] xl:w-[100%] object-contain"
                    />
                </div>
            </div>
        </div>
     );
}

export default Whoweare;
