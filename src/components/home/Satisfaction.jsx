function Satisfaction() {
    return ( 
        <div className="w-full bg-[url('/images/SatisfactionBG.png')] bg-cover bg-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-10 pt-10 pb-10 sm:pt-16 sm:pb-16 lg:pt-0 lg:pb-0">
                
                {/* Left Image Section */}
                <div className="w-full lg:w-[50%] flex justify-center lg:justify-start hidden sm:hidden md:hidden lg:flex">
                    <img 
                        src="/images/Students.png" 
                        alt="Students" 
                        className="w-full max-w-md lg:max-w-full object-contain"
                    />
                </div>
                
                {/* Right Content Section */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center text-left">
                    <h2 className="text-white font-bold text-2xl sm:text-3xl">
                        Satisfaction Guaranteed
                    </h2>
                    <p className="text-white py-4 mb-2 text-sm sm:text-base leading-relaxed">
                        With a client-centric approach, we have grown to be a successful and reputed consultants with expertise in various migration services thereby ensuring best service and results for our clients.
                    </p>

                    <ul className="list-disc text-white ml-4 mb-3 text-sm sm:text-base">
                        <li className="mb-1">Team of Qualified Registered Migration Agents</li>
                        <li className="mb-1">PIER Qualified Education Counselors</li>
                        <li className="mb-1">Extensive experience of complex visa cases</li>
                        <li className="mb-1">Professional services at affordable prices</li>
                        <li className="mb-1">Virtual Consultations (Your Time, Your Place)</li>
                    </ul>

                    <div className="flex justify-start gap-4 my-8">
                        <img src="/images/Australia.png" alt="Australia" className="w-12 sm:w-16" />
                        <img src="/images/Canada.png" alt="Canada" className="w-12 sm:w-16" />
                        <img src="/images/UK.png" alt="UK" className="w-12 sm:w-16" />
                    </div>

                    <div className="flex justify-start">
                        <button className="w-[150px] sm:w-[150px] lg:w-[150px] inline-flex items-center justify-center py-3 px-6 bg-primary hover:bg-primary/90 transition-colors text-white rounded-lg font-medium gap-2">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Satisfaction;
