import Image from "next/image";
import Photo1 from "../../public/images/Photo1.png";
import Photo2 from "../../public/images/Photo2.png";
import Photo3 from "../../public/images/Photo3.png";
import Photo4 from "../../public/images/Photo4.png";
import Subject from "../subject/Subject";
import bg from "../../public/vectors/bg-banner.svg";
function Feature() {
  return (
    <section className="justify-center items-center p-5 relative gap-[60px]">
      <div className="w-full absolute bg-cover bg-no-repeat top-0 left-0 right-0 bottom-0 -z-20">
        <Image src={bg} />
      </div>
      <div className="flex justify-center gap-20 padding-[52.5]  my-[3rem] mx-auto">
        <div className="left">
          <Subject
            title="About us"
            description=" Owner and investor with a reputation"
          />

          <button className="not-italic font-bold text-base leading-5 text-gray-100 justify-center items-center mr-16 w-40 h-10 bg-[#4397a4] rounded border-[#4397a4]">
            Explore
          </button>
        </div>

        <div className="grid gap-[10px]">
          <div className="flex items-end gap-[10px]">
            <Image src={Photo1} />
            <Image src={Photo3} />
          </div>
          <div className="flex items-start gap-[10px]">
            <Image src={Photo2} />
            <Image src={Photo4} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
