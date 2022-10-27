import Image from "next/image";
import gram1 from "../../public/images/gram1.png";
import gram2 from "../../public/images/gram2.png";
import gram3 from "../../public/images/gram3.png";
import gram4 from "../../public/images/gram4.png";
import gram5 from "../../public/images/gram5.png";
import gram6 from "../../public/images/gram6.png";
import Text from "../text/Text";
import bg from "../../public/vectors/bg-logo.svg";

function Instagram() {
  return (
    <section className="justify-center padding-[52.5px] items-center p-5 relative gap-[60px]">
      <div className="w-full absolute bg-cover bg-no-repeat top-0 left-0 right-0 bottom-0 -z-20">
        <Image src={bg} />
      </div>

      <div className="container">
        <Text title="Socials" description="On Instagram" />

        <div className="grid gap-[10px] justify-center">
          <div className="flex gap-[10px]">
            <Image src={gram1} />
            <Image src={gram2} />
            <Image src={gram3} />
          </div>

          <div className="flex gap-[10px]">
            <Image src={gram4} />
            <Image src={gram5} />
            <Image src={gram6} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instagram;
