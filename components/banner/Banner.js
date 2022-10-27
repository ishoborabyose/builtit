import Image from "next/image";
import Rectangle1 from "../../public/images/Rectangle1.png";
import Rectangle2 from "../../public/images/Rectangle2.png";
import Rectangle3 from "../../public/images/Rectangle3.png";
import Rectangle4 from "../../public/images/Rectangle4.png";
import Rectangle5 from "../../public/images/Rectangle5.png";

function Banner() {
  return (
    <section className="flex justify-between w-[90%] px-20 pt-20 mt-[3rem] mx-auto relative ">
      <div className="flex flex-col gap-10">
        <p className="h-32 not-italic font-bold text-6xl  w-[500px] leading-[72px] text-[#486a6f]">
          Development company
        </p>
        <p className="h-16 not-italic font-normal text-xl leading-9 w-[480px] text-gray-600">
          Forward-thinking real estate developer, owner and investor with a
          reputation
        </p>
        <div className="flex items-start p-0 h-16 gap-[20px] w-[500px]">
          <button className="w-32 h-16 not-italic font-bold text-base leading-5 text-center text-gray-100 rounded bg-[#4397a4] border-[#4397a4]">
            {" "}
            Services
          </button>
          <button
            className="not-italic font-bold text-base leading-5 items-center text-center text-gray-700 h-16 bg-indigo-200 rounded w-[257px]
border-[#c6dbff]"
          >
            About the company
          </button>
        </div>
      </div>
      <div className="grid gap-[10px]">
        <div className="flex gap-[10px] items-end">
          <div>
            <Image src={Rectangle1} alt="picture" />
          </div>

          <div>
            <Image src={Rectangle3} alt="picture" />
          </div>

          <div>
            <Image src={Rectangle5} alt="picture" />
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div>
            <Image src={Rectangle2} alt="picture" />
          </div>

          <div>
            {" "}
            <Image src={Rectangle4} alt="picture" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
