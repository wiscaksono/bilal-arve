export default function Backup() {
  return (
    <>
      <section
        className="bg-purple-wave bg-bottom bg-repeat-x lg:min-h-screen"
        id="home"
      >
        <div className="navbar absolute top-[44px] left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform opacity-100 lg:block">
          <div className="flex items-center justify-center gap-[47px] text-[#432261]">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a
              href="https://tenor.com/view/fish-fish-sucking-eel-sucking-sucking-hotgrltae-gif-23577558"
              target="_blank"
            >
              <img src="arve.svg" alt="" />
            </a>
            <a href="#portofolio">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <nav className=" absolute flex w-full items-center justify-center gap-[25px] px-[23px] pt-[49px] lg:hidden">
          <div className="h-[40px] w-[37px]">
            <img src="icon.svg" alt="" className="h-full w-full" />
          </div>
          <div className="h-[1px] w-full bg-[#744BFF]" />
          <div className="h-[37px] w-[37px]">
            <img src="burger.svg" alt="" className="h-[37px] w-[37px]" />
          </div>
        </nav>

        <div className="flex min-h-screen flex-col items-center justify-center lg:flex-row">
          <div className="flex flex-col items-center gap-[60px]">
            <img src="circle.svg" alt="" className="h-[30px] w-[30px]" />
            <div className="flex w-[147px] justify-between">
              <img src="cross.svg" alt="" className="h-[30px] w-[30px]" />
              <img src="kite.svg" alt="" className="h-[30px] w-[30px]" />
            </div>
          </div>
          <h1 className="mt-[37px] mb-[37px] px-[59px] text-center text-[30px] font-medium leading-[120%] text-[#432261] lg:w-[870px] lg:text-[64px]">
            Turn your idea into a marvelous illustration
          </h1>
          <div className="flex flex-col items-center gap-[57px]">
            <div className="flex w-[200px] justify-between">
              <img src="square.svg" alt="" className="h-[30px] w-[30px]" />
              <img
                src="green-circle.svg"
                alt=""
                className="h-[30px] w-[30px]"
              />
            </div>
            <img src="triangle.svg" alt="" className="h-[30px] w-[30px]" />
          </div>
        </div>
      </section>

      <section
        className="mb-0 bg-gradient-to-t from-[#7E5BFF] to-[#9A89FF] pb-[111px] lg:relative lg:mb-[156px] lg:min-h-screen lg:pb-0"
        id="about"
      >
        <div className="flex flex-col items-center justify-center text-white lg:pt-[24px]">
          <h1 className="text-lg font-light lg:mb-10 lg:text-[64px]">
            Hello, I am
          </h1>
          <h1 className="mb-[18px] text-2xl lg:mb-[27px] lg:text-[64px]">
            Muhammad Bilal Arve
          </h1>
          <p className="px-[26px] text-center font-normal lg:px-[393px] lg:text-[24px]">
            I am an illustrator and i have 4 years experience. I really love
            turn idea into a marvelous illustration and i love exploring
            illustration style and colours combination
          </p>
        </div>
        <div className="mt-[48px] flex items-center justify-center lg:pb-[58px]">
          <div className="flex flex-col items-start  gap-[24px] px-[36px] lg:flex-row lg:rounded-full lg:bg-[#432261] lg:py-[16px]">
            <div className="flex items-center justify-center gap-[24px]">
              <div>
                <img src="work.svg" alt="" />
              </div>
              <div className="text-white">
                <p>Work Experience</p>
                <h4 className="-mt-2 text-[24px] font-semibold">4 Years</h4>
              </div>
            </div>
            <div className="flex items-center justify-center gap-[24px]">
              <div>
                <img src="project.svg" alt="" />
              </div>
              <div className="text-white">
                <p>Project Completed</p>
                <h4 className="-mt-2 text-[24px] font-semibold">400+</h4>
              </div>
            </div>
            <div className="flex items-center justify-center gap-[24px]">
              <div>
                <img src="email.svg" alt="" className="h-full w-full" />
              </div>
              <div className="text-white">
                <p>Contact</p>
                <h4 className="-mt-2 text-[12px] font-semibold lg:text-[24px]">
                  bilalarve@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 z-20 hidden w-[1836px] -translate-x-1/2 transform lg:block">
          <div className="relative flex items-start justify-between">
            <div className="absolute left-1/2 hidden h-[274px] w-[1128px] -translate-x-1/2 transform lg:block">
              <div className="relative">
                <img
                  src="triangle-white.svg"
                  alt=""
                  className="absolute top-[106px]"
                />
                <img
                  src="square-white.svg"
                  alt=""
                  className="absolute top-0 left-[154px]"
                />
                <img
                  src="circle-white.svg"
                  alt=""
                  className="absolute top-[274px] left-[180px]"
                />
                <img
                  src="kite-white.svg"
                  alt=""
                  className="absolute top-[264px] right-[63px]"
                />
                <img
                  src="circle-white.svg"
                  alt=""
                  className="absolute top-[124px] right-0"
                />
                <img
                  src="cross-white.svg"
                  alt=""
                  className="absolute top-0 right-[134px]"
                />
              </div>
            </div>
            <img src="tanaman.svg" alt="" />
            <img src="bilal.png" alt="" />
            <img src="tanaman-kanan.png" alt="" />
          </div>

          {/* <div className="absolute bottom-0 left-1/2 h-[245px] w-[1112px] -translate-x-1/2 transform bg-red-500">
            <div className="relative bg-yellow-300">
              <img
                src="square-white.svg"
                alt=""
                className="absolute top-0 left-[139px]"
              />
              <img
                src="circle-white.svg"
                alt=""
                className="absolute left-[120px] bottom-0"
              />
            </div>
          </div> */}
        </div>
        <div className=" absolute bottom-0 z-10 hidden h-[92px] w-full bg-white lg:block" />
      </section>
      <div className="grid grid-cols-1 grid-rows-2 lg:hidden">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 h-40 w-full bg-gradient-to-t from-[#744BFF] to-[#7E5BFF]"></div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 h-40 w-full bg-white"></div>
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 h-[248px] w-full ">
          <img
            className="h-full w-full object-contain "
            src="bilal.png"
            alt=""
          />
        </div>
      </div>

      <section className=" min-h-screen lg:pb-0" id="portofolio">
        <h1 className="text-center text-[22px] font-bold text-[#432261] lg:text-[64px] lg:font-semibold">
          Portfolio
        </h1>
        <p className="text-center text-[14px] text-[#564795] lg:text-[24px]">
          Here some of my work that i made
        </p>

        <div className="mt-[44px] hidden lg:block">
          <div className="flex items-center justify-center gap-[22px] md:w-full md:px-[10px]">
            <div className="flex flex-col gap-[20px]">
              <div className="">
                <img src="nigga-singing.svg" alt="" className="h-full w-full" />
              </div>
              <div className="">
                <img src="ebt.svg" alt="" className="h-full w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="">
                <img src="reading-book.svg" alt="" className="h-full w-full" />
              </div>
              <div className="flex gap-[22px]">
                <div>
                  <img src="selection.svg" alt="" />
                </div>
                <div>
                  <img src="designing.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div>
                <img src="cattronot.svg" alt="" />
              </div>
              <div>
                <img src="social-media.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <div className="mt-[24px] flex flex-col gap-[14px] px-[24px]">
            <img src="nigga-singing.svg" alt="" />
            <img src="nigga-singing.svg" alt="" />
            <img src="nigga-singing.svg" alt="" />
            <img src="nigga-singing.svg" alt="" />
            <img src="nigga-singing.svg" alt="" />
            <img src="nigga-singing.svg" alt="" />
          </div>
        </div>

        <div className="mt-[32px] mb-[64px]  flex items-center justify-center lg:pb-[134px]">
          <button className="rounded-full bg-gradient-to-tr from-[#744BFF] to-[#A69DFF]">
            <a
              href="#"
              className="block py-[12px] px-[20px] text-[14px] font-light text-white lg:text-[20px]"
            >
              Click here for more
            </a>
          </button>
        </div>
      </section>

      <section className="relative flex h-full min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-t from-[#432261] to-[#7436AE]">
        <div className="relative">
          <div className="absolute left-1/2 hidden h-[274px] w-[1257px] -translate-x-1/2 transform lg:block">
            <div className="relative">
              <img src="circle.svg" alt="" className="absolute top-[106px]" />
              <img
                src="kite.svg"
                alt=""
                className="absolute top-0 left-[154px]"
              />
              <img
                src="cross.svg"
                alt=""
                className="absolute top-[274px] left-[180px]"
              />
              <img
                src="square.svg"
                alt=""
                className="absolute top-[264px] right-[63px]"
              />
              <img
                src="triangle.svg"
                alt=""
                className="absolute top-[124px] right-0"
              />
              <img
                src="green-circle.svg"
                alt=""
                className="absolute top-0 right-[134px]"
              />
            </div>
          </div>
          <h1 className="mb-[0] w-auto px-[20px] pt-[111px] text-center text-[18px] font-medium leading-[135%] text-white lg:mb-[44px] lg:w-[1112px] lg:px-0 lg:text-[36px]">
            if you love and interesting with my work lets collaboration and let
            me turn your idea into the marvelous illustration
          </h1>
        </div>
        <div className="mt-[18px] flex items-center justify-center">
          <button className="rounded-full bg-gradient-to-tr from-[#744BFF] to-[#A69DFF]">
            <div className="flex items-center justify-center gap-[20px] py-[10px] px-[12px] pl-[20px]">
              <p className="text-[14px] font-bold text-white lg:text-[24px] lg:font-medium">
                Let’s Work Together
              </p>
              <img
                src="email-btn2.svg"
                alt=""
                className="lg:h-[52px] lg:w-[52px]"
              />
            </div>
          </button>
        </div>
        <div className="mt-[24px] flex items-center justify-center pb-[253px] lg:mt-[44px]">
          <div className="flex  gap-[35px]">
            <a href="#">
              <img src="instagram.svg" alt="" className="h-[34px] w-[34px]" />
            </a>
            <a href="#">
              <img
                src="email-footer.svg"
                alt=""
                className="h-[34px] w-[34px]"
              />
            </a>
            <a href="#">
              <img src="dribble.svg" alt="" className="h-[34px] w-[34px]" />
            </a>
          </div>
        </div>
        <div className="absolute -bottom-32  -right-[200px] scale-50 lg:bottom-0 lg:right-0  lg:scale-100">
          <img src="paper.svg" alt="" />
        </div>
        <div className="absolute -bottom-32 -left-24 scale-50  lg:bottom-0 lg:left-0  lg:scale-100">
          <img src="pencil.svg" alt="" />
        </div>
        <div className="absolute bottom-0 left-[344px] hidden lg:block">
          <img src="brush.svg" alt="" />
        </div>
      </section>
    </>
  );
}
