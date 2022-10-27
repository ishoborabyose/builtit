import Image from "next/image";
import image from "../../public/images/AboutBanner.png";
import Subject from "../subject/Subject";

function AboutBanner() {
  return (
    <section>
      <div className="flex my-[3rem] mx-auto w-[90%] justify-between">
        <div className="flex pt-5 self-center w-[540px h-[400px]">
          <Image src={image} />
        </div>

        <div>
          <Subject
            title="About us"
            description=" Owner and investor with a reputation"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
