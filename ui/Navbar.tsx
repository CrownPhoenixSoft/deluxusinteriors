import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const ref = useRef<any>(null);
  const [open, setOpen] = useState(false);

  const className = {
    closeIcon:
      "absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300",
    burgerIcon: "bg-white h-[2px] w-7 transform transition-all duration-300",
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("hey there");
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed backdrop-blur-sm z-50 top-0 left-0 w-full bg-primary bg-opacity-40`}
    >
      <div
        className={`py-3 container flex items-center justify-between drop-shadow-2xl`}
      >
        <Link href="/">
          <a>
            <Image
              src="/deluxus-logo-white.svg"
              alt=""
              width={300}
              height={31.11}
            />
          </a>
        </Link>

        <div className="flex items-center">
          <div className="">
            <ul
              className={`gap-4 pr-4 transform transition-all duration-300 hidden md:flex`}
            >
              {links.map((i, index) => (
                <Link key={index} href={i.route}>
                  <a>
                    <li
                      className={`text-white text-shadow transform transition-all duration-300 text-sm font-bold uppercase`}
                    >
                      {i.label}
                    </li>
                  </a>
                </Link>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            <button
              ref={ref}
              onClick={(e) => {
                setOpen(!open);
              }}
              className="relative group"
            >
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-primary-light ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div
                    className={`${className.burgerIcon} origin-left ${
                      open && "translate-x-10"
                    }`}
                  />

                  <div
                    className={`${className.burgerIcon} rounded ${
                      open ? "translate-x-10" : "translate-x-1"
                    } delay-75`}
                  />

                  <div
                    className={`${className.burgerIcon} origin-left ${
                      open && "translate-x-10"
                    } delay-150`}
                  />

                  <div
                    className={`absolute items-center justify-between transform transition-all duration-500 top-2.5  ${
                      open ? "translate-x-0" : "-translate-x-10"
                    } flex ${open ? "w-12" : "w-0"}`}
                  >
                    <div
                      className={`${className.closeIcon} ${
                        open && "rotate-45"
                      }`}
                    ></div>
                    <div
                      className={`${className.closeIcon} ${
                        open && "-rotate-45"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={{
          open: {
            height: "initial",
          },
          closed: {
            height: 0,
          },
        }}
        transition={{
          duration: 0.1,
        }}
        className={`overflow-hidden mx-auto text-center md:hidden`}
      >
        <ul
          className={`gap-2 transform transition-all duration-300 flex flex-col p-4`}
        >
          {links.map((i, index) => (
            <Link key={index} href={i.route}>
              <li
                className={`text-white text-shadow transform transition-all duration-300 text-sm font-bold uppercase py-2`}
              >
                {i.label}
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

const links = [
  { label: "Home", route: "/" },
  { label: "Our Services", route: "/our-services" },
  { label: "Portfolio", route: "/portfolio" },
  { label: "Contact Us", route: "/contact-us" },
];

export default Navbar;
