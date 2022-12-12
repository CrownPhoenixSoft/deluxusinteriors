import Banner from "../components/Banner";
import SeoHead from "../components/SeoHead";
import { IServiceData, ServicesData } from "../public/data/services.data";
import React, { useState } from "react";
import Divider from "../ui/Divider";
import Modal from "../ui/Modal";

const OurServices = () => {
  const [service, setService] = useState<null | IServiceData>();

  return (
    <div>
      <SeoHead
        title="Our Services"
        description="Services Page, Our Services, What we do"
        uri="our-services"
        image="/deluxus-logo-dark.svg"
      />

      <Banner title="Our Services" src="https://www.udi.ae/images/bg/12.jpg" />

      <div className="h-14" />

      <div className="container">
        <Divider />
        <h1 className="py-3 text-2xl">CORE SERVICES</h1>

        <p className="text-sm font-normal">
          Standing tall as a company with exceptional expertise in interior
          designing, we believe that “Ingenuity resides with a few” and when
          blended with the state-of-the-art technology, it creates a vision
          beyond imagination. Our teams of experts work in tune with the client
          requirements thereby providing them with seamless solutions for their
          properties.
          <br />
          <br /> Our core services are as follows:
        </p>
      </div>

      <div className="container py-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {ServicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-sm overflow-hidden"
            >
              <img src={service.img} alt="" className="w-full" />
              <div className="pt-4 px-2">
                <Divider />

                <h1 className="text-md font-semibold pt-1 pb-2">
                  {service.title}
                </h1>

                <p className="text-sm font-normal text-gray-500">
                  {service.about}
                </p>

                <button
                  onClick={() => setService(service)}
                  className="my-2 uppercase text-sm bg-gray-200 px-2 py-1 rounded-sm"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={!!service} onClose={() => setService(null)}>
        <React.Fragment>
          {service && (
            <div className="p-4 w-[95vw] sm:w-[90vw] md:w-[70vw] lg:w-[50vw]">
              <img className="shadow-md rounded-md" src={service.img} />

              <div className="mt-4">
                <Divider />

                <h1 className="text-lg font-semibold pt-1 pb-2">
                  {service.title}
                </h1>

                <p className="text-sm font-normal text-gray-500 ">
                  {service.about}
                </p>

                <p className="text-sm font-normal text-gray-500">
                  {service.body}
                </p>
              </div>
            </div>
          )}
        </React.Fragment>
      </Modal>
    </div>
  );
};

export default OurServices;
