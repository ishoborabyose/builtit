import Image from "next/image";
import Icon1 from "../../public/vectors/icon1.svg";
import bg from "../../public/vectors/bg-banner.svg";

function Innovation() {
  return (
    <section className=" justify-center items-center p-5 relative gap-[60px]">
      <div className="w-full absolute bg-cover bg-no-repeat top-0 left-0 right-0 bottom-0 -z-20">
        <Image src={bg} />
      </div>

      <div className="m-auto pt-32 flex flex-col gap-[80px]">
        <p className="h-12 not-italic font-bold text-4xl text-center text-gray-700 relative m-auto  w-[725px] leading-[48px]">
          Innovative Execution
        </p>
        <div
          className="flex justify-center items-center p-5 m-auto gap-[50px]
w-[1180px]
h-[348px]"
        >
          <div className="innovation__card">
            <Image src={Icon1} />
            <p className="w-56 h-10 not-italic font-bold text-2xl text-gray-700 leading-[44px]">
              Featured Listing
            </p>
            <p className="h-16 not-italic font-medium text-base text-gray-600 w-[268px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="innovation__card">
            <Image src={Icon1} />
            <p className="w-56 h-10 not-italic font-bold text-2xl text-gray-700 leading-[44px]">
              Featured Listing
            </p>
            <p className="h-16 not-italic font-medium text-base text-gray-600 w-[268px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="innovation__card">
            <Image src={Icon1} />
            <p className="w-56 h-10 not-italic font-bold text-2xl text-gray-700 leading-[44px]">
              Featured Listing
            </p>
            <p className="h-16 not-italic font-medium text-base text-gray-600 w-[268px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
