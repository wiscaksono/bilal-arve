export default function backup() {
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

        <div className="flex items-center justify-center min-h-screen flex-col lg:flex-row">
          <div className="flex flex-col items-center gap-[60px]">
            <img src="circle.svg" alt="" className="w-[30px] h-[30px]" />
            <div className="flex w-[147px] justify-between">
              <img src="cross.svg" alt="" className="w-[30px] h-[30px]" />
              <img src="kite.svg" alt="" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <h1 className="text-[30px] font-medium leading-[120%] text-[#432261] text-center px-[59px] mt-[37px] mb-[37px] lg:w-[870px] lg:text-[64px]">
            Turn your idea into a marvelous illustration
          </h1>
          <div className="flex flex-col items-center gap-[57px]">
            <div className="flex justify-between w-[200px]">
              <img src="square.svg" alt="" className="w-[30px] h-[30px]" />
              <img
                src="green-circle.svg"
                alt=""
                className="w-[30px] h-[30px]"
              />
            </div>
            <img src="triangle.svg" alt="" className="w-[30px] h-[30px]" />
          </div>
        </div>
      </section>

      <section className=" bg-gradient-to-t from-[#744BFF] to-[#9A89FF] ">
        <div className="flex items-center justify-center flex-col text-white">
          <h1 className="text-lg font-light">Hello, I am</h1>
          <h1 className="text-2xl mb-[18px]">Muhammad Bilal Arve</h1>
          <p className="px-[26px] text-center">
            I am an illustrator and i have 4 years experience. I really love
            turn idea into a marvelous illustration and i love exploring
            illustration style and colours combination
          </p>
        </div>
        <div className="flex items-center justify-center mt-[48px]">
          <div className="flex flex-col gap-[24px]  items-start">
            <div className="flex items-center gap-[24px] justify-center">
              <div>
                <img src="work.svg" alt="" />
              </div>
              <div className="text-white">
                <p>Work Experience</p>
                <h4 className="text-[24px] font-semibold -mt-2">4 Years</h4>
              </div>
            </div>
            <div className="flex items-center gap-[24px] justify-center">
              <div>
                <img src="project.svg" alt="" />
              </div>
              <div className="text-white">
                <p>Project Completed</p>
                <h4 className="text-[24px] font-semibold -mt-2">400+</h4>
              </div>
            </div>
            <div className="flex items-center gap-[24px] justify-center">
              <div>
                <img src="email.svg" alt="" />
              </div>
              <div className="text-white">
                <p>Contact</p>
                <h4 className="text-[24px] font-semibold -mt-2">
                  bilalarve@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-rows-2 grid-cols-1">
        <div className="row-start-1 row-span-1   bg-gradient-to-t from-[#744BFF] to-[#9A89FF] w-full" />
        <div className="bg-white h-[72px] row-start-2 row-span-1" />
        <div className="row-span-2 row-start-1 w-[257px] h-[247px] ">
          <img src="bilal.png" alt="" />
        </div>
      </div>

      <section>
        <h1 className="font-bold text-[22px] text-[#432261] text-center">
          Portfolio
        </h1>
        <p className="text-[14px] text-[#564795] text-center">
          Here some of my work that i made
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-[14px] mt-[24px]">
          <img src="nigga-singing.svg" alt="" />
          <img src="nigga-singing.svg" alt="" />
          <img src="nigga-singing.svg" alt="" />
          <img src="nigga-singing.svg" alt="" />
          <img src="nigga-singing.svg" alt="" />
          <img src="nigga-singing.svg" alt="" />
        </div>
        <div className="flex items-center justify-center mt-[32px]">
          <button className="bg-gradient-to-tr from-[#744BFF] to-[#A69DFF] rounded-full">
            <a
              href="#"
              className="py-[12px] px-[20px] block text-[14px] text-white font-light"
            >
              Click here for more
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
