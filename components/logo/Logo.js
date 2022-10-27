import Image from "next/image";
import bg from "../../public/vectors/bg-logo.svg";
import image from "../../public/images/image-logo.jpg";
import Subject from "../subject/Subject";
import Symbol from "../symbol/Symbol";

function Logo() {
  return (
    <section className="justify-center items-center p-5 relative gap-[60px]">
      <div className="w-full absolute bg-cover bg-no-repeat top-0 left-0 right-0 bottom-0 -z-20">
        <Image src={bg} />
      </div>
      <Symbol />

      <div className="flex justify-center gap-20 padding-[52.5]  my-[3rem] mx-auto">
        <div
          className="flex pt-5 self-center w-[540px]
h-[400px]"
        >
          <Image src={image} />
        </div>

        <div className="logo">
          <Subject
            title="About us"
            description=" Owner and investor with a reputation"
          />

          <button className="not-italic font-bold text-base leading-5 text-gray-100 justify-center items-center mr-16 w-40 h-10 bg-[#4397a4] border-[#4397a4] rounded">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}

export default Logo;
