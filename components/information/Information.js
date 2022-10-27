import bg from "../../public/vectors/bg-banner.svg";
import call from "../../public/images/call.png";
import message from "../../public/images/message.png";
import Card from "../card/Card";
import Image from "next/image";

function Information() {
  return (
    <section className="flex justify-center items-center p-5 relative gap-[60px]">
      <div className="w-full absolute bg-cover bg-no-repeat top-0 left-0 right-0 bottom-0 -z-20">
        <Image src={bg} />
      </div>

      <div className="flex w-[80%] justify-between my-[3rem] mx-auto">
        <div>
          <h4 className="not-italic font-medium text-base leading-8 text-[#5bccde]">
            Contact
          </h4>
          <p className="not-italic font-bold text-4xl text-[#486a6f] leading-[48px]">
            Get In Touch
          </p>

          <div className="pt-10 flex flex-col gap-8">
            <Card image={call} title="Tel" description="708-790-0000" />

            <Card
              image={message}
              title="Email"
              description="sales@buildit.site"
            />
            <Card
              image={message}
              title="Office"
              description="60 Manor Station St."
            />
          </div>
        </div>

        <div className="justify-center flex flex-col pl-8 pr-8 left-0 right-0 top-0 bottom-0 drop-shadow-2xl bg-[#e1ebfa]  rounded gap-[10px] ">
          <div className="flex gap-[5px]">
            <div className="flex flex-col">
              <label className="not-italic font-normal text-sm leading-5 text-[#678c92]">
                Name
              </label>
              <input className="box-border bg-transparent h-10 rounded-sm border border-solid border-[#486a6f]"></input>
            </div>
            <div className="flex flex-col">
              <label className="not-italic font-normal text-sm leading-5 text-[#678c92]">
                Email
              </label>
              <input className="box-border bg-transparent h-10 rounded-sm border border-solid border-[#486a6f]"></input>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="not-italic font-normal text-sm leading-5 text-[#678c92]">
              Subject
            </label>
            <input className="box-border bg-transparent h-10 rounded-sm border border-solid border-[#486a6f]"></input>
          </div>
          <div className="flex flex-col">
            <label className="not-italic font-normal text-sm leading-5 text-[#678c92]">
              message
            </label>
            <textarea className="box-border bg-transparent h-[90px] rounded-sm border border-solid border-[#486a6f]"></textarea>
          </div>

          <button className="flex flex-row justify-center items-center text-white py-[15px] px-[55px] rounded gap-[10px] left-[8.74%] right-[8.22%] top-[82.87%] bottom-[6.89%] border border-[#4397a4] bg-[#4397a4]">
            Send message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Information;
