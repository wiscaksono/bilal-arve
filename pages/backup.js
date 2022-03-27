export default function Backup() {
  return (
    <>
      <section className="bg-purple-wave bg-bottom bg-repeat-x ">
        {/* <nav className="flex items-center justify-center gap-[25px] px-[23px] pt-[49px]">
          <div className="w-[37px] h-[40px]">
            <img src="icon.svg" alt="" className="w-full h-full" />
          </div>
          <div className="w-full h-[1px] bg-[#744BFF]" />
          <div className="w-[37px] h-[37px]">
            <img src="burger.svg" alt="" className="w-[37px] h-[37px]" />
          </div>
        </nav> */}

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

      <section className=" bg-gradient-to-t from-[#744BFF] to-[#9A89FF] ">
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-lg font-light">Hello, I am</h1>
          <h1 className="mb-[18px] text-2xl">Muhammad Bilal Arve</h1>
          <p className="px-[26px] text-center">
            I am an illustrator and i have 4 years experience. I really love
            turn idea into a marvelous illustration and i love exploring
            illustration style and colours combination
          </p>
        </div>
        <div className="mt-[48px] flex items-center justify-center">
          <div className="flex flex-col items-start  gap-[24px]">
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
                <img src="email.svg" alt="" />
              </div>
              <div className="text-white">
                <p>Contact</p>
                <h4 className="-mt-2 text-[24px] font-semibold">
                  bilalarve@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 grid-rows-2">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 h-40 w-full bg-purple-500"></div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 h-40 w-full bg-white"></div>

        <div className="col-start-1 col-end-2 row-start-1 row-end-3 h-[248px] w-full">
          <img
            className="h-full w-full object-contain"
            src="bilal.png"
            alt=""
          />
        </div>
      </div>

      {/* <img src="bilal.png" alt="" /> */}

      <section>
        <h1 className="text-center text-[22px] font-bold text-[#432261]">
          Portfolio
        </h1>
        <p className="text-center text-[14px] text-[#564795]">
          Here some of my work that i made
        </p>
        <div className="mt-[24px] grid grid-cols-3 grid-rows-2 gap-[14px]">
          <img src="nigga-singing.svg" alt="" />
          <img src="nigga-singing.svg" alt="" />
          <img src="nigga-singing.svg" alt="" />
          <img src="nigga-singing.svg" alt="" />
          <img src="nigga-singing.svg" alt="" />
          <img src="nigga-singing.svg" alt="" />
        </div>
        <div className="mt-[32px] flex items-center justify-center">
          <button className="rounded-full bg-gradient-to-tr from-[#744BFF] to-[#A69DFF]">
            <a
              href="#"
              className="block py-[12px] px-[20px] text-[14px] font-light text-white"
            >
              Click here for more
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
