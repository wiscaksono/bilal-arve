import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MyModal from "../components/Modal";
import gsap, { Power3, TimelineMax } from "gsap";
import { useEffect, useState } from "react";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "../utils/Split3.min.js";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    const ease3 = Power3.easeOut;
    // Section Home
    const tl = new TimelineMax({ ease: ease3 });
    tl.from(".bg-purple-wave", 1, { y: 300, opacity: 0 })
      .from(".navbar", 0.5, { y: -100, opacity: 0 })
      .to(".hero", 1, { delay: 1, opacity: 1, text: "Turn your idea into" })
      .to(
        ".hero2",
        1.5,
        { delay: 2, opacity: 1, text: "a marvelous illustration" },
        "-=2"
      )
      .from("#about", 0.5, { y: 100 }, "-=5");
    const showIcon = new TimelineMax({ duration: 1 });
    showIcon
      .from(".kotak", { opacity: 0, x: 300, delay: 3.5 }, "img")
      .from(".triangle-kanan", { opacity: 0, x: 300, delay: 3.2 }, "img")
      .from(".green-circle-kanan", { opacity: 0, delay: 3, x: 300 }, "img")
      .from(".layangan", { opacity: 0, delay: 2.8, x: -300 }, "img")
      .from(".circle", { opacity: 0, delay: 3.3, x: -300 }, "img")
      .from(".cross-spin", { opacity: 0, delay: 3.5, x: -400 }, "img");
    const bounce = new TimelineMax({ ease: ease3 });
    bounce
      .to(
        ".triangle-kanan",
        { y: -19, yoyo: true, duration: 2, repeat: -1 },
        "img"
      )
      .to(
        ".green-circle-kanan",
        { y: -15, yoyo: true, duration: 2.5, repeat: -1 },
        "img"
      )
      .to(".circle", { y: -12, yoyo: true, duration: 3.5, repeat: -1 }, "img")
      .to(".kotak", { y: -22, yoyo: true, duration: 3.5, repeat: -1 }, "img")
      .to(
        ".cross-spin",
        { y: -18, yoyo: true, duration: 3.5, repeat: -1 },
        "img"
      )
      .to(
        ".layangan",
        { y: -12, yoyo: true, duration: 3.5, repeat: -1 },
        "img"
      );
    // Section About
    const split = new SplitText("#about-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText("#about-text", {
      type: "lines",
      linesClass: "lineParent",
    });
    new gsap.timeline({
      ease: ease3,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
      },
    })
      .to(split.lines, {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
      })
      .from(".plants", 1.5, { y: 1000 }, "-=2")
      .from("#about-line", 0.5, {
        y: 50,
        opacity: 0,
      })
      .from(".desc-about", 0.5, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
      })
      .from(".pot1", 1, { x: "-100%", scale: 0, y: 50 }, "-=1")
      .from(".pot2", 1, { x: "100%", scale: 0, y: 50 }, "-=1.5")
      .from(
        ".img-bilal",
        1,
        {
          y: 100,
          opacity: 0,
        },
        "-=1"
      );
    new gsap.timeline({ ease: ease3 })
      .to(".pot1", 4, { y: -5, yoyo: true, repeat: -1 })
      .to(".pot2", 4, { y: -5, yoyo: true, repeat: -1 });
  });

  return (
    <>
      <section id="home ">
        <div className="relative min-h-screen bg-bottom bg-repeat-x bg-purple-wave">
          <div className="absolute top-[44px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 navbar opacity-100">
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
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 ">
            <h1 className="lg:w-[870px] opacity-0  text-center text-[#432261] font-medium lg:text-[64px] hero md:w-[300px] md:text-[30px]"></h1>
            <h1 className="lg:w-[870px] opacity-0  text-center text-[#432261] font-medium lg:text-[64px] hero2 md:w-[300px] md:text-[30px]"></h1>
          </div>
          <div className="absolute lg:w-[1166px] lg:rotate-0 lg:h-[273px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:rotate-90 md:w-[700px] md:h-[450px]">
            <div>
              <div className="absolute left-0 top-1/2 ">
                <img src="circle.svg" alt="circle" className="circle" />
              </div>
              <div className="absolute left-[154px] top-0  ">
                <img src="kite.svg" alt="" className="layangan" />
              </div>
              <div className="absolute left-[180px] bottom-0 cross-spin ">
                <img src="cross.svg" alt="" className="cross-spin" />
              </div>
              <div className="absolute right-0 top-1/2 ">
                <img src="triangle.svg" alt="" className="triangle-kanan" />
              </div>

              <div className="absolute right-[134px] top-0">
                <img
                  src="green-circle.svg"
                  alt=""
                  className="green-circle-kanan"
                />
              </div>
              <div className="absolute right-[155px] bottom-0   ">
                <img src="square.svg" alt="" className="kotak" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="relative overflow-hidden ">
        <div className="min-h-screen bg-gradient-to-t from-[#744BFF] to-[#9A89FF] relative">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1
                id="about-text"
                className="text-[64px] text-white font-light text-center leading-[76px] pt-[24px] mb-[27px] md:text-[50px]"
              >
                Hello I am <br />
                <span className="font-medium md:text-[50px]">
                  Muhammad Bilal Arve
                </span>
              </h1>
              <p
                id="about-text"
                className="text-[24px] text-white max-w-[1135px] text-center md:w-[650px]"
              >
                I am an illustrator and i have 4 years experience. I really love
                turn idea into a marvelous illustration and i love exploring
                illustration style and colours combination
              </p>
              <div
                id="about-line"
                className="bg-[#432261] rounded-full mt-[40px] shadow-lg md:hidden"
              >
                <div className="py-[16px] px-[36px] flex items-center justify-center gap-[60px]">
                  <div className="flex items-center desc-about gap-[24px]">
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
                  <div className="flex items-center desc-about gap-[24px]">
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
                  <div className="flex items-center desc-about gap-[24px]">
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
        <div className="absolute bottom-[58px] left-1/2 transform -translate-x-1/2 w-[430px] h-[413.27px] z-30 img-bilal">
          <img src="bilal.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[116px] bg-white z-20" />
        <div className="w-[1836px] bottom-[116px] absolute left-1/2 transform -translate-x-1/2  ">
          <div className="relative opacity-100">
            <div className="absolute bottom-0 plants z-10">
              <img src="tanaman.svg" alt="" />
            </div>
            <div className="absolute bottom-0 right-0 plants">
              <img src="tanaman-kanan.png" alt="" />
            </div>
          </div>
          <div className="absolute w-[1414px]  left-1/2 transform -translate-x-1/2 bottom-[350px] -translate-y-1/2">
            <div className="relative">
              <div className="absolute left-0 bottom-[40px] pot1">
                <img src="pot.svg" alt="" />
              </div>
              <div className="absolute right-0 bottom-[50px] pot2">
                <img src="pot.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1100px] h-[273px] bottom-[58px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-180 tambahan md:hidden lg:block">
          <div>
            <div className="absolute left-0 top-1/2 ">
              <img src="circle-white.svg" alt="circle" className="circle" />
            </div>
            <div className="absolute left-[154px] top-0  ">
              <img src="kite-white.svg" alt="" className="layangan" />
            </div>
            <div className="absolute left-[180px] bottom-0 cross-spin ">
              <img src="cross-white.svg" alt="" className="cross-spin" />
            </div>
            <div className="absolute right-0 top-1/2 ">
              <img src="triangle-white.svg" alt="" className="triangle-kanan" />
            </div>

            <div className="absolute right-[134px] top-0">
              <img
                src="circle-white.svg"
                alt=""
                className="green-circle-kanan"
              />
            </div>
            <div className="absolute right-[155px] bottom-0   ">
              <img src="square-white.svg" alt="" className="kotak" />
            </div>
          </div>
        </div>
      </section>
      <section id="portofolio ">
        <div className="min-h-screen flex items-center justify-center flex-col">
          <div>
            <h1 className="text-[64px] font-medium text-[#432261] text-center">
              Portofolio
            </h1>
            <p className="text-[24px] text-[#432261] font-light text-center">
              here some of my work that i made
            </p>
          </div>
          <div className="mt-[44px] ">
            <div className="flex gap-[22px] items-center justify-center md:w-full md:px-[10px]">
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
        className="bg-gradient-to-t from-[#432261] to-[#7436AE] min-h-screen relative md:overflow-y-hidden"
        id="contact"
      >
        <div
          className="
        flex items-center justify-center flex-col gap-[44px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <h1 className="text-white text-[36px] w-[1112px] text-center md:w-[700px]">
            if you love and interesting with my work lets collaboration and let
            me turn your idea into the marvelous illustration
          </h1>
          <button
            className=" bg-gradient-to-tr from-[#744BFF] to-[#A69DFF] rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          ></button>
          <MyModal></MyModal>
          <div className="flex gap-[35px]">
            <a href="https://www.instagram.com/bilalarve/" target="_blank">
              <img src="instagram.svg" alt="" className="w-[35px] h-[35px]" />
            </a>
            <a href="mailto:arve4me@gmail.com" target="_blank">
              <img
                src="email-footer.svg"
                alt=""
                className="w-[35px] h-[35px]"
              />
            </a>
            <a href="https://dribbble.com/Arve" target="_blank">
              <img src="dribble.svg" alt="" className="w-[35px] h-[35px]" />
            </a>
          </div>
        </div>
        <div className="absolute lg:bottom-0 lg:left-0 md:-bottom-[200px] md:-left-[100px]">
          <img src="pencil.svg" alt="" />
        </div>
        <div className="absolute lg:bottom-0 lg:right-0 md:-bottom-[200px] md:-right-[100px]">
          <img src="paper.svg" alt="" />
        </div>
        <div className="absolute lg:bottom-0 lg:left-[369px] md:hidden lg:block">
          <img src="brush.svg" alt="" />
        </div>

        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:hidden">
          <div className="w-[1257px] h-[274px] relative">
            <img
              src="kite.svg"
              alt=""
              className="absolute -top-[150px] left-[154px]"
            />
            <img
              src="circle.svg"
              alt=""
              className="absolute top-[10px] left-0"
            />
            <img
              src="cross.svg"
              alt=""
              className="absolute bottom-[150px] left-[180px]"
            />
            <img
              src="green-circle.svg"
              alt=""
              className="absolute -top-[150px] right-[134px]"
            />
            <img
              src="triangle.svg"
              alt=""
              className="absolute -top-[30px] right-0"
            />
            <img
              src="square.svg"
              alt=""
              className="absolute bottom-[110px] right-[155px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
