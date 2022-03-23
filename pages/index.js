import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Navbar />
        </div> */}
        <div className="flex items-center justify-center gap-[47px] mt-[10px]">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <div>
            <img src="arve.svg" alt="" />
          </div>
          <a href="#portofolio">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <section className="bg-purple-wave bg-repeat-x bg-bottom">
          <div className="flex items-center justify-center  wrapper h-screen relative ">
            <h1 className="text-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium  text-[#432261] text-[64px]">
              Turn your idea into a marvelous illustration
            </h1>
            <div className="relative w-[1166px] h-[273px]">
              <div>
                <img
                  src="circle.svg"
                  alt=""
                  className="absolute left-0 top-1/2"
                />
                <img
                  src="kite.svg"
                  alt=""
                  className="absolute left-[154px] top-0"
                />
                <img
                  src="cross.svg"
                  alt=""
                  className="absolute left-[180px] bottom-0"
                />

                <img
                  src="triangle.svg"
                  alt=""
                  className="absolute right-0 top-1/2"
                />

                <img
                  src="green-circle.svg"
                  alt=""
                  className="absolute right-[134px] top-0"
                />
                <img
                  src="square.svg"
                  alt=""
                  className="absolute right-[155px] bottom-0"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-[144px]" id="about">
          <div>
            <div>
              <div className="bg-gradient-to-t from-[#744BFF] to-[#9A89FF] relative">
                <div className="h-[58px] w-full absolute bottom-0 bg-white z-10"></div>
                <div className="text-center text-white pt-[24px]">
                  <h1 className="font-light text-[64px] leading-[76px]">
                    Hello I am
                    <br />
                    <span className="font-medium">Muhammad Bilal Arve</span>
                  </h1>
                  <p className="max-w-[1135px] text-center mx-auto text-[24px] leading-[43px] font-normal">
                    I am an illustrator and i have 4 years experience. I really
                    love turn idea into a marvelous illustration and i love
                    exploring illustration style and colours combination
                  </p>
                </div>
                <div className="bg-[#432261] rounded-full w-max mx-auto mt-[40px] mb-[24px]">
                  <div className="py-[16px] px-[36px] flex gap-[74px]">
                    <Exp
                      img="work.svg"
                      title="Work Experience"
                      desc="4 Years"
                    />
                    <Exp
                      img="work.svg"
                      title="Work Experience"
                      desc="4 Years"
                    />
                    <Exp
                      img="work.svg"
                      title="Work Experience"
                      desc="4 Years"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center z-20 relative">
                  <img src="bilal.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portofolio">
          <h1 className="font-semibold text-[64px] text-center text-[#432261]">
            Portofolio
          </h1>
          <p className="text-[24px] text-[#8279A5] text-center mb-[44px]">
            here some of my work that i made
          </p>
          <div className="max-w-[1446px] mx-auto mb-[44px]">
            <div className="flex gap-[22px] ">
              <div className="flex flex-col gap-[20px]">
                <div className="">
                  <img
                    src="nigga-singing.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="">
                  <img src="ebt.svg" alt="" className="w-full h-full" />
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="">
                  <img
                    src="reading-book.svg"
                    alt=""
                    className="w-full h-full"
                  />
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
          <div className="items-center justify-center flex mb-[144px]">
            <button className="bg-gradient-to-tr from-[#744BFF] to-[#A69DFF] rounded-full">
              <a href="#" className="p-[24px] block text-[24px] text-white">
                Click here for more
              </a>
            </button>
          </div>
        </section>

        <section
          className="bg-gradient-to-t from-[#432261] to-[#7436AE] min-h-screen relative"
          id="contact"
        >
          <div className="flex items-center justify-center">
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[36px] w-[1112px] text-center">
              if you love and interesting with my work lets collaboration and
              let me turn your idea into the marvelous illustration
            </h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-[1257px] h-[274px] relative">
                <img
                  src="kite.svg"
                  alt=""
                  className="absolute top-0 left-[154px]"
                />
                <img
                  src="circle.svg"
                  alt=""
                  className="absolute bottom-1/2 left-0"
                />
                <img
                  src="cross.svg"
                  alt=""
                  className="absolute bottom-0 left-[180px]"
                />
                <img
                  src="green-circle.svg"
                  alt=""
                  className="absolute top-0 right-[134px]"
                />
                <img
                  src="triangle.svg"
                  alt=""
                  className="absolute top-[125px] right-0"
                />
                <img
                  src="square.svg"
                  alt=""
                  className="absolute bottom-0 right-[155px]"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <img src="pencil.svg" alt="" />
          </div>
          <div className="absolute bottom-0 right-0">
            <img src="paper.svg" alt="" />
          </div>
          <div className="absolute bottom-0 left-[369px]">
            <img src="brush.svg" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}

const Exp = ({ img, title, desc }) => {
  return (
    <div className="flex items-center">
      <div className="mr-[24px]">
        <img src={img} alt="" />
      </div>
      <div className="text-white flex flex-col items-start">
        <p className="text-[15px] -mb-[15px]">{title}</p>
        <h5 className="font-semibold text-[36px]">{desc}</h5>
      </div>
    </div>
  );
};
