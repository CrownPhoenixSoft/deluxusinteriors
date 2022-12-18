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

      <Banner title="CONTACT US" src="https://www.udi.ae/images/bg/12.jpg" />

      <div className="container grid lg:grid-cols-2 gap-8 py-4">
        <div>
          <h1 className="pt-3 pb-2 text-2xl font-semibold text-primary">
            CONTACT DETAILS
          </h1>
          <Divider className="border-primary" />

          <div className="pt-3">
            <h1 className="pb-1 text-sm text-primary">Location:</h1>
            <p className="text-sm font-normal text-gray-500 max-w-md">
              Qaser Al Hoson - Falcon Tower - 9th Floor Opposite to - Hamdan Bin
              Mohammed St - Abu Dhabi
            </p>
          </div>

          <div className="pt-3">
            <h1 className="pb-1 text-sm text-primary">Phone:</h1>
            <p className="text-sm font-normal text-gray-500">
              Tel. +971 50 411 0174
            </p>
          </div>

          <div className="pt-3">
            <h1 className="pb-1 text-sm text-primary">Timings:</h1>
            <p className="text-sm font-normal text-gray-500">
              Sunday – Thursday (9 AM – 6 PM) <br />
              Friday (8 AM – 2 PM) <br />
              Saturday, Closed
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1007.0439110240983!2d54.35415208811826!3d24.484363099009705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67d953604a01%3A0x4dca420e3584ec2!2sDELUXUS%20Interiors!5e1!3m2!1sen!2sus!4v1671369306791!5m2!1sen!2sus"
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
