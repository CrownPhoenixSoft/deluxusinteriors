const Footer = () => {
    return (
        <footer className="bg-primary-dark">
            <div className="container py-20">
                <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                        <div className="w-[90%]  md:w-[360px] md:max-w-full">
                            <img
                                src="/deluxus-logo-white.svg"
                                alt="Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="pr-12 mt-4">
                            <p className="text-sm font-normal text-gray-300">
                                United Design combines a sense of purpose with
                                the magic of imagination to create unique
                                interior spaces that elevate the living
                                experience. A most sought after name, United
                                Design continues to set new standards in the
                                domain.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-white text-xl font-bold pb-2">
                            Our Services
                        </h1>
                        <ul className="">
                            <li className="py-2 text-md font-normal text-gray-300">
                                Interior Design Consultancy
                            </li>
                            <li className="py-2 text-md font-normal text-gray-300">
                                Design & Fit-Out Solutions
                            </li>
                            <li className="py-2 text-md font-normal text-gray-300">
                                Site Supervision
                            </li>
                            <li className="py-2 text-md font-normal text-gray-300">
                                Procurement of FF&E
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white text-xl font-bold pb-2">
                            Contact Us
                        </h1>

                        <div className="py-2">
                            <p className="text-md font-normal text-gray-300">
                                12th Floor, Office #1204, Dusit Thani Complex
                                (Commercial Tower), Zone E-25 Sultan Bin Zayed
                                The First St., Abu Dhabi – UAE
                            </p>
                        </div>

                        <div className="py-2">
                            <p className="text-md font-normal text-gray-300">
                                udi@ccsupport.ae
                            </p>
                        </div>

                        <div className="py-2">
                            <p className="text-md font-normal text-gray-300">
                                +971 2 207 2220
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
