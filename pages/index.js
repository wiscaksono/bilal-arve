import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="min-h-screen relative bg-purple-wave bg-bottom bg-repeat-x">
          <div className="absolute top-[44px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
            <h1 className="w-[870px]  text-center text-[#432261] font-medium text-[64px] ">
              Turn your idea into a marvelous illustration
            </h1>
          </div>
          <div className="absolute w-[1166px] h-[273px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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

      <section id="about" className="relative">
        <div className="min-h-screen bg-gradient-to-t from-[#744BFF] to-[#9A89FF] relative">
          <div>
            <div className="flex items-center justify-center flex-col">
              <h1 className="text-[64px] text-white font-light text-center leading-[76px] pt-[24px] mb-[27px]">
                Hello I am <br />
                <span className="font-medium">Muhammad Bilal Arve</span>
              </h1>
              <p className="text-[24px] text-white max-w-[1135px] text-center">
                I am an illustrator and i have 4 years experience. I really love
                turn idea into a marvelous illustration and i love exploring
                illustration style and colours combination
              </p>
              <div className="bg-[#432261] rounded-full mt-[40px] shadow-lg">
                <div className="py-[16px] px-[36px] flex items-center justify-center gap-[60px]">
                  <div className="flex items-center gap-[24px]">
                    <div>
                      <img src="work.svg" alt="" />
                    </div>
                    <div className="text-white">
                      <p className="text-[15px] -mb-[15px] mt-[10px]">
                        Work Experience
                      </p>
                      <h5 className="font-semibold text-[36px]">4 Years</h5>
                    </div>
                  </div>
                  <div className="flex items-center gap-[24px]">
                    <div>
                      <img src="project.svg" alt="" />
                    </div>
                    <div className="text-white">
                      <p className="text-[15px] -mb-[15px] mt-[10px]">
                        Project Completed
                      </p>
                      <h5 className="font-semibold text-[36px]">400+</h5>
                    </div>
                  </div>
                  <div className="flex items-center gap-[24px]">
                    <div>
                      <img src="email.svg" alt="" />
                    </div>
                    <div className="text-white">
                      <p className="text-[15px] -mb-[15px] mt-[10px]">
                        Contact
                      </p>
                      <h5 className="font-semibold text-[36px]">
                        bilalarve@gmail.com
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[58px] left-1/2 transform -translate-x-1/2 w-[430px] h-[413.27px] z-10">
          <img src="bilal.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[116px] bg-white "></div>
        <div className="absolute bottom-[116px] left-0  ">
          <img src="tanaman.svg" alt="" />
        </div>
        <div className="absolute bottom-[116px] right-0 ">
          <img src="tanaman-kanan.png" alt="" />
        </div>
        <div className="absolute left-[251px] bottom-[500px]">
          <img src="pot.svg" alt="" />
        </div>

        <div className="absolute right-[253px] bottom-[450px]">
          <img src="pot.svg" alt="" />
        </div>
      </section>

      <section id="portofolio">
        <div className="min-h-screen">
          <div>
            <h1 className="text-[64px] font-medium text-[#432261] text-center">
              Portofolio
            </h1>
            <p className="text-[24px] text-[#432261] font-light text-center">
              here some of my work that i made
            </p>
          </div>
          <div className="mt-[44px]">
            <div className="flex gap-[22px] items-center justify-center">
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

          <div className="items-center justify-center flex mt-[15px]">
            <button className="bg-gradient-to-tr from-[#744BFF] to-[#A69DFF] rounded-full">
              <div></div>
              <a
                href="#"
                className="py-[12px] px-[18px] block text-[20px] text-white font-light"
              >
                Click here for more
              </a>
            </button>
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-t from-[#432261] to-[#7436AE] min-h-screen relative"
        id="contact"
      >
        <div className="flex items-center justify-center flex-col gap-[44px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-[36px] w-[1112px] text-center">
            if you love and interesting with my work lets collaboration and let
            me turn your idea into the marvelous illustration
          </h1>

          <button className=" bg-gradient-to-tr from-[#744BFF] to-[#A69DFF] rounded-full">
            <div className="px-[24px] py-[16px] flex items-center gap-[20px]">
              <a href="#" className="font-medium text-[24px] text-white">
                Let’s work together
              </a>
              <img src="email-btn.svg" alt="" />
            </div>
          </button>
          <div className="flex gap-[35px]">
            <a href="https://www.instagram.com/bilalarve/" target="_blank">
              <img src="instagram.svg" alt="" />
            </a>
            <a href="mailto:bilalarve@gmail.com" target="_blank">
              <img src="email-footer.svg" alt="" />
            </a>
            <a href="https://dribbble.com/Arve" target="_blank">
              <img src="dribble.svg" alt="" />
            </a>
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
        <div className="absolute top-[341px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
      </section>
    </>
  );
}
