import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { NavLink } from "react-router";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "Homepage", to: "/" },
    { text: "Portfolio", to: "/portfolio" },
    { text: "Services", to: "/services" },
    { text: "Newsletter", to: "/newsletter" },
  ];

  return (
    <>
      {!open && (
        <nav className="container mx-auto fixed lg:top-[8%] top-[0%] z-[12] left-0 right-0 flex justify-between items-center lg:p-0 p-3 border-b-gray-500 border-1 lg:border-0 lg:bg-transparent bg-black">
          <div className="logo-brand">
            <img
              src="/images/logo.webp"
              className="w-[75px] h-[75px] hidden lg:block"
              alt=""
            />
            <img
              src="/images/logo2.webp"
              className="w-[250px] h-[45px] block lg:hidden"
              alt=""
            />
          </div>
          <div
            onClick={() => setOpen(true)}
            className="hamburger-menu h-[28px] relative cursor-pointer flex justify-center items-center"
          >
            <div
              className={`relative w-[28px] ease-[cubic-bezier(0.95,0.05,0.795,0.035)]  ${open && "rotate-45 before:translate-y-[9px] before:-rotate-90 after:opacity-0"} h-[3px] bg-[gray] before:content-[''] before:block before:w-[28px] before:h-[3px] before:bg-[gray] before:absolute before:top-[-9px] after:content-[''] after:block after:w-[18px] after:h-[3px] after:bg-[gray] after:absolute after:top-[9px]`}
            ></div>
          </div>
        </nav>
      )}
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-0">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-xxl transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <div className="relative flex h-full flex-col overflow-y-auto bg-black py-6 shadow-xl">
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {open && (
                      <nav className="container mx-auto fixed lg:top-[8%] top-[0%] z-[12] left-0 right-0 flex justify-between items-center lg:p-0 p-3  border-b-gray-500 border-1 lg:border-0 ">
                        <div className="logo-brand">
                          <img
                            src="/images/logo.webp"
                            className="w-[75px] h-[75px] hidden lg:block"
                            alt=""
                          />
                          <img
                            src="/images/logo2.webp"
                            className="w-[250px] h-[45px] block lg:hidden"
                            alt=""
                          />
                        </div>
                        <div
                          onClick={() => setOpen(false)}
                          className="hamburger-menu h-[28px] relative cursor-pointer flex justify-center items-center"
                        >
                          <div
                            className={`relative w-[28px] ease-[cubic-bezier(0.95,0.05,0.795,0.035)]  ${open && "rotate-45 before:translate-y-[9px] before:-rotate-90 after:opacity-0"} h-[3px] bg-[gray] before:content-[''] before:block before:w-[28px] before:h-[3px] before:bg-[gray] before:absolute before:top-[-9px] after:content-[''] after:block after:w-[18px] after:h-[3px] after:bg-[gray] after:absolute after:top-[9px]`}
                          ></div>
                        </div>
                      </nav>
                    )}

                    <ul className="text-[white] mt-[3rem] lg:ml-[12rem] linksitems">
                      {menuItems.map((item) => {
                        return (
                          <li
                            className={`lg:text-[34px] text-[20px] font-normal mb-3 hover:translate-x-5 duration-300 ease-in-out`}
                            onClick={() => setOpen(false)}
                          >
                            <NavLink to={item.to}>{item.text}</NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Navbar;
