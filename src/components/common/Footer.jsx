function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="w-full bg-black text-white px-8 md:px-20 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-evenly flex-wrap gap-8">
          
          {/* Left Section */}
          <div className="w-full md:w-1/5 flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img
                src="/images/footerlogo.png"
                alt="ACME Migration Logo"
                className="w-[175px] max-w-full"
              />
            </div>
            <div className="flex gap-4 text-xl">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-3/5 flex justify-center md:justify-between flex-wrap gap-8 text-center md:text-left">
            
            <div className="flex flex-col min-w-[150px]">
              <p className="font-semibold text-lg mb-2">Quick Links</p>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">Home</a>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">About Us</a>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">Australia</a>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">Canada</a>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">New Zealand</a>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">UK</a>
            </div>

            <div className="flex flex-col min-w-[150px]">
              <p className="font-semibold text-lg mb-2">Our Branches</p>
              <span className="mb-1 font-bold">Australia</span>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">Melbourne</a>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">Dandenong</a>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">Perth</a>
              <span className="mt-2 mb-1 font-bold">India</span>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">Amritsar</a>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">Ahmedabad</a>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">Vadodra</a>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">A/bad Gota</a>
            </div>

            <div className="flex flex-col min-w-[150px]">
              <p className="font-semibold text-lg mb-2">Code of Conduct</p>
              <a href="#" className="hover:text-yellow-500 transition-colors mb-1">OMARA Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-white text-black text-center py-3 text-sm">
        <p>&copy; {new Date().getFullYear()} ACME Migration. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
