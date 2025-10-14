function Map() {
    return ( 
        <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.4295098523394!2d145.213277!3d-37.990441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad615b2af26540f%3A0x5b430ff376d9fcd1!2sACME%20Consultants%20for%20Migration%20%26%20Education!5e0!3m2!1sen!2sin!4v1760413555820!5m2!1sen!2sin"
            className="w-full h-[450px] rounded-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ACME Consultants Location"
          ></iframe>
        </div>
        </div>
     );
}

export default Map;