import Image from "next/image";
import instagram from "../../public/images/instagram.png";
import facebook from "../../public/images/facebook.png";

function Footer() {
  return (
    <section className=" bg-[#486a6f]  h-[60vh]  p-10">
      <div className="flex justify-between my-[3rem] mx-[auto] w-[90%]">
        <div className="flex flex-col justify-between">
          <ul className="not-italic font-medium text-base leading-8 text-gray-100 items-start">
            <li className="not-italic font-bold text-2xl flex items-center text-gray-100 leading-[44px]">
              {" "}
              Buildit
            </li>
            <li>Development company, 2022</li>
          </ul>
          <p className="not-italic font-medium text-base leading-8 text-gray-100 flex justify-start">
            Site design – ⏰ Alarm
          </p>
        </div>
        <div>
          <ul className="not-italic font-medium text-base leading-8 text-gray-100 flex flex-col justify-start p-0">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
          <div className="flex gap-[10px] justify-center">
            <Image src={instagram} />
            <Image src={facebook} />
          </div>
        </div>
        <ul className="not-italic font-medium text-base leading-8 text-gray-100 items-start">
          <li>About us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className="not-italic font-medium text-base leading-8 text-gray-100 items-start flex justify-between flex-col">
          <ul>
            <li>Get in touch</li>
            <li>60 Manor Station St. Fairport,</li>
            <li>NY 14450</li>
          </ul>
          <ul>
            <li>708-790-0000</li>
            <li>sales@buildit.site</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
