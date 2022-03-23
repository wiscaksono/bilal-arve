import Link from "next/link";

export default function Navbar() {
  return (
    <section className="wrapper">
      <nav className="flex gap-[42.53px] justify-center items-center mt-[84px]">
        <Link href="#" passHref>
          Home
        </Link>
        <Link href="about" passHref>
          About
        </Link>
        <div>
          <img src="arve.svg" alt="" />
        </div>
        <Link href="portofolio" passHref>
          Work
        </Link>
        <Link href="contact" passHref>
          Contact
        </Link>
      </nav>
    </section>
  );
}
