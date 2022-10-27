import Image from "next/image";
import Icon1 from "../../public/vectors/icon1.svg";
import Symbol from "../symbol/Symbol";

import bg from "../../public/vectors/bg-banner.svg";
import Text from "../text/Text";

function Statistic() {
  return (
    <section className="mt-40 justify-center items-center p-5 relative gap-[60px]">
      <div className="w-full absolute bg-cover bg-no-repeat top-0 left-0 right-0 bottom-0 -z-20">
        <Image src={bg} />
      </div>

      <Text title="Socials" description="On statistic" />

      <div className="h-40 flex justify-between rounded-sm p-12 m-auto mt-12 w-[1024px] left-[88px] drop-shadow-xl bg-[#c6dbff] top-[246px]">
        <div className="flex justify-center self-center gap-[20px]">
          <Image src={Icon1} />
          <div>
            <p className="not-italic font-bold text-4xl m-0 text-gray-700 leading-[49px]">
              {">200"}
            </p>
            <p className="not-italic font-bold text-base leading-5 m-0 tracking-widest text-gray-600">
              Number
            </p>
          </div>
        </div>
        <hr className="border h-20 border-[#678c92] bg-gray-600 "></hr>
        <div className="flex justify-center self-center gap-[20px]">
          <Image src={Icon1} />
          <div>
            <p className="not-italic font-bold text-4xl m-0 text-gray-700 leading-[49px]">
              {">200"}
            </p>
            <p className="not-italic font-bold text-base leading-5 m-0 tracking-widest text-gray-600">
              Number
            </p>
          </div>
        </div>
        <hr className="border h-20 border-[#678c92] bg-gray-600 "></hr>
        <div className="flex justify-center self-center gap-[20px]">
          <Image src={Icon1} />
          <div>
            <p className="not-italic font-bold text-4xl m-0 text-gray-700 leading-[49px]">
              {">200"}
            </p>
            <p className="not-italic font-bold text-base leading-5 m-0 tracking-widest text-gray-600">
              Number
            </p>
          </div>
        </div>
      </div>

      <Symbol />
    </section>
  );
}

export default Statistic;
