function Ethics() {
    return ( 
        <div className="w-full bg-[url('/images/EthicsBG.png')] bg-cover bg-center mb-12 mt-24 pt-10 sm:pt-16 lg:pt-30 lg:pb-0 pb-10 sm:pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left gap-8 lg:gap-0">
                
                {/* Left Image Section (hidden on mobile & tablet) */}
                <div className="hidden lg:block w-[30%] mt-[-10rem]">
                    <img 
                        src="/images/EthicsSection.png" 
                        alt="EthicsSection"
                        className="w-full object-contain"
                    />
                </div>

                {/* Middle Text Section */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-start items-center">
                    <h2 className="text-white font-semibold leading-[1.4] text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem]">
                        Ethics and Execution Always Our Priority
                    </h2>
                </div>
 
 
                {/* Right Button Section */}
                <div className="w-full lg:w-[15%] flex justify-center items-center mt-6 lg:mt-0">
                    <button className="text-white py-3 px-8 sm:py-4 sm:px-10 border border-white rounded-md hover:bg-white hover:text-black transition">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Ethics;
