import Link from "next/link";
import bgImage from "../../public/vectors/bg-header.svg";
import Image from "next/image";

function About() {
  return (
    <section className="relative">
      <div>
        <div className="w-full absolute bg-cover bg-no-repeat top-0 left-0 right-0 bottom-0 h-64 -z-20">
          <Image src={bgImage} />
        </div>
      </div>
      <header className="flex justify-between relative items-center pt-14  w-[90%]">
        <div></div>
        <div className="flex items-center gap-[10px]">
          <div className="bg-[#4397a4] p-2 w-12 h-12 rounded-full "></div>
          <p className="font-bold text-2xl text-gray-700 leading-[44px]">
            {" "}
            <Link href="/">Buildit</Link>
          </p>
        </div>
        <ul
          className="flex-row gap-[50px]
width-[744px] justify-center items-start p-2 h-8 flex"
        >
          <li className="not-italic font-medium text-base leading-8 text-gray-600">
            {" "}
            <Link href="/about">About</Link>
          </li>
          <li className="not-italic font-medium text-base leading-8 text-gray-600">
            {" "}
            <Link href="/services">Services</Link>
          </li>
          <li className="not-italic font-medium text-base leading-8 text-gray-600">
            {" "}
            <Link href="/project">Project</Link>
          </li>
          <li className="not-italic font-medium text-base leading-8 text-gray-600">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <button className="not-italic font-bold text-base leading-5 text-gray-100 justify-center items-center mr-16 w-40 h-10 bg-[#4397a4] rounded">
          Need a project?
        </button>
      </header>

      <div></div>
    </section>
  );
}

export default About;
