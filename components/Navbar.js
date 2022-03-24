import Link from "next/link";

export default function Navbar() {
  return (
    <section className="wrapper">
      <nav className="flex gap-[42.53px] justify-center items-center mt-[84px]">
        <a href="#" passHref>
          Home
        </a>
        <a href="#about" passHref>
          About
        </a>
        <div>
          <img src="arve.svg" alt="" />
        </div>
        <a href="#portofolio" passHref>
          Work
        </a>
        <a href="#contact" passHref>
          Contact
        </a>
      </nav>
    </section>
  );
}
