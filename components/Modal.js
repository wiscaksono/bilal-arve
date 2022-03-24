import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className=" bg-gradient-to-tr from-[#744BFF] to-[#A69DFF] rounded-full"
        onClick={openModal}
      >
        <div className="px-[24px] py-[16px] flex items-center gap-[20px]">
          <a href="#" className="font-medium text-[24px] text-white">
            Let’s work together
          </a>
          <img src="email-btn.svg" alt="" />
        </div>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0  overflow-y-auto bg-black/50 backdrop-blur-md transition-all z-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block  px-[120px] py-[86px]  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-[22px] relative">
                <div className="absolute top-[41px] right-[41px]">
                  <button type="button" onClick={closeModal}>
                    <div className="w-[20px] h-[20px]">
                      <img src="close.svg" alt="" className="w-full h-full" />
                    </div>
                  </button>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div className="mb-[24px]">
                    <img src="email-modal.png" alt="" />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-[36px] font-semibold leading-6 text-[#432261] mb-[4px]"
                  >
                    Lets Talk!
                  </Dialog.Title>
                  <div className=" mb-[24px]">
                    <p className="text-[24px] text-[#8279A5]">
                      i will reply your email as soon as posible
                    </p>
                  </div>
                  <div className="flex gap-[21px] items-center justify-center h-[222px]">
                    <div className="flex flex-col gap-[16px] w-[429px]">
                      <div>
                        <label className="text-xs font-medium text-[#341F87] mb-[4px]">
                          Name *
                        </label>
                        <input
                          type="text"
                          className="w-full h-[41px] py-[10px] text-base font-normal text-[#341F87] bg-white bg-clip-padding border border-solid border-[#CFC9E5] rounded-[8px] transition ease-in-out  m-0  focus:text-[#341F87] focus:bg-white  focus:outline-none px-3 placeholder:text-[#CFC9E5] placeholder:text-sm "
                          placeholder="Joe Mama"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-[#341F87] mb-[4px]">
                          Email *
                        </label>
                        <input
                          type="text"
                          className="w-full h-[41px] py-[10px] text-base font-normal text-[#341F87] bg-white bg-clip-padding border border-solid border-[#CFC9E5] rounded-[8px] transition ease-in-out  m-0  focus:text-[#341F87] focus:bg-white  focus:outline-none px-3 placeholder:text-[#CFC9E5]  placeholder:text-sm"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-[#341F87] mb-[4px]">
                          Company *
                        </label>
                        <input
                          type="text"
                          className="w-full h-[41px] py-[10px] text-base font-normal text-[#341F87] bg-white bg-clip-padding border border-solid border-[#CFC9E5] rounded-[8px] transition ease-in-out  m-0  focus:text-[#341F87] focus:bg-white  focus:outline-none px-3 placeholder:text-[#CFC9E5]  placeholder:text-sm"
                          placeholder="Google"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-[429px]">
                      <label className="text-xs font-medium text-[#341F87] mb-[4px]">
                        Company *
                      </label>
                      <textarea
                        name=""
                        id=""
                        placeholder="Type yor message"
                        className="w-full h-[205px] py-1.5 text-base  text-[#341F87] bg-white bg-clip-padding border border-solid border-[#CFC9E5] rounded-[8px] transition ease-in-out  m-0  focus:text-[#341F87] focus:bg-white  focus:outline-none px-3 placeholder:text-[#CFC9E5] placeholder:text-sm  resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-[24px] py-[16px] text-[16px] font-bold  bg-[#EF4B6C] border border-transparent rounded-[13px]  text-white"
                    onClick={closeModal}
                  >
                    Let’s work together
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
