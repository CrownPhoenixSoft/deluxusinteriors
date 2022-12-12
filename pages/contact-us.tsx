import Banner from "../components/Banner";
import SeoHead from "../components/SeoHead";
import Divider from "../ui/Divider";

const ContactUs = () => {
    return (
        <div>
            <SeoHead
                title="Contact us"
                description="Contact-us Page"
                uri="contact-us"
                image="/deluxus-logo-dark.svg"
            />

            <Banner
                title="CONTACT US"
                src="https://www.udi.ae/images/bg/12.jpg"
            />

            <div className="container grid lg:grid-cols-2 gap-8 py-4">
                <div>
                    <h1 className="pt-3 pb-2 text-2xl font-semibold text-primary">
                        CONTACT DETAILS
                    </h1>
                    <Divider className="border-primary" />

                    <div className="pt-3">
                        <h1 className="pb-1 text-sm text-primary">Location:</h1>
                        <p className="text-sm font-normal text-gray-500 max-w-md">
                            12th Floor, Office #1204, Dusit Thani Complex
                            (Commercial Tower), Zone E-25 Sultan Bin Zayed The
                            First St., Abu Dhabi – UAE
                        </p>
                    </div>

                    <div className="pt-3">
                        <h1 className="pb-1 text-sm text-primary">Phone:</h1>
                        <p className="text-sm font-normal text-gray-500">
                            Tel. +971 2 207 2220
                        </p>
                    </div>

                    <div className="pt-3">
                        <h1 className="pb-1 text-sm text-primary">Timings:</h1>
                        <p className="text-sm font-normal text-gray-500">
                            Monday – Thursday (8 AM – 4 PM) <br />
                            Friday (9 AM – 12 PM)
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-semibold text-primary mt-2 mb-3">
                        GET IN TOUCH
                    </h1>
                    <Divider className="border-primary" />
                    <form className="mt-4 flex flex-col gap-4">
                        <input
                            className="outline-none border border-primary-light focus:border-primary-dark px-4 py-2 rounded-sm shadow-md text-primary-dark"
                            placeholder="Your name*"
                        />
                        <input
                            className="outline-none border border-primary-light focus:border-primary-dark px-4 py-2 rounded-sm shadow-md text-primary-dark"
                            placeholder="Email Address*"
                        />
                        <input
                            className="outline-none border border-primary-light focus:border-primary-dark px-4 py-2 rounded-sm shadow-md text-primary-dark"
                            placeholder="Phone*"
                        />
                        <textarea
                            className="outline-none min-h-[150px] max-h-[200px] border border-primary-light focus:border-primary-dark px-4 py-2 rounded-sm shadow-md text-primary-dark"
                            placeholder="Your Message*"
                        />

                        <button className="transition-all duration-300 uppercase w-fit px-4 py-1 text-sm bg-primary hover:bg-primary-dark text-white rounded-sm shadow-md border border-primary-light hover:border-primary-dark">
                            send message
                        </button>
                    </form>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14523.050824318136!2d54.3642287658972!3d24.493677439495624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e666021d748cf%3A0x1fa85b42eded7b86!2sSofitel%20Abu%20Dhabi%20Corniche!5e0!3m2!1sen!2sae!4v1669554527009!5m2!1sen!2sae"
                width="100%"
                height="450"
                frameBorder={0}
                loading="lazy"
                className="mt-2 shadow-md border-y border-primary"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default ContactUs;
