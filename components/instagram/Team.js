import gram1 from "../../public/images/gram1.png";
import gram2 from "../../public/images/gram2.png";
import gram3 from "../../public/images/gram3.png";
import gram4 from "../../public/images/gram4.png";
import gram5 from "../../public/images/gram5.png";
import gram6 from "../../public/images/gram6.png";
import Text from "../text/Text";

import Badge from "../badge/Badge";
import Image from "next/image";
import bg from "../../public/vectors/bg-logo.svg";
function Team() {
  const badgeArr = [
    gram1,
    gram2,
    gram3,
    gram4,
    gram5,
    gram6,
    gram1,
    gram2,
    gram3,
  ];
  return (
    <section className="justify-center items-center p-5 relative gap-[60px]">
      <div className="w-full absolute bg-cover bg-no-repeat top-0 left-0 right-0 bottom-0 -z-20">
        <Image src={bg} />
      </div>

      <div className="m-auto">
        <Text title="Our Team" description="Let&#39;s meet" />

        <div className="grid pl-24 pr-24 gap-[40px] justify-center grid-cols-3">
          {badgeArr.map((badge) => (
            <Badge image={badge} />
          ))}
        </div>
      </div>

      <div className="logo">
        <hr
          className="left-0 my-[3rem] mx-auto
w-[90%] right-0 top-0 border-[#678c92] bg-gray-600 bottom-[99.06%] "
        ></hr>
        <div className="flex justify-between gap-[40px] my-[3rem] m-auto w-[90%]">
          <p className="not-italic font-bold text-4xl m-0 text-[#486a6f] leading-[48px]">
            Call us
          </p>
          <div className="flex items-end p-0 gap-5">
            <button className="w-32 h-12 not-italic font-bold text-base leading-5 text-center text-gray-100 rounded border-[#4397a4] bg-[#4397a4] ">
              Call
            </button>
            <button className="not-italic font-bold text-base leading-5 w-32 items-center text-center text-gray-700 h-12 bg-[#c6dbff] border-[#c6dbff] rounded">
              Email
            </button>
          </div>
        </div>
        <hr
          className="left-0 my-[3rem] mx-auto
w-[90%] right-0 top-0 border-[#678c92] border-[1px] bg-gray-600 bottom-[99.06%] "
        ></hr>
      </div>
    </section>
  );
}

export default Team;
