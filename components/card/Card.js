import Image from "next/image";
function Card(props) {
  return (
    <section>
      <div className="flex gap-[10px]">
        <div className="flex items-center p-5 top-0 bottom-0 bg-gray-300 rounded gap-[10px] left-[2%] right-[72.21%]">
          {" "}
          <Image src={props.image} />{" "}
        </div>
        <div className="flex flex-col">
          <h4 className="not-italic font-medium text-base leading-8 m-0 text-[#486a6f]">
            {props.title}
          </h4>
          <p className="not-italic font-bold text-xl leading-7 text-[#486a6f] m-0">
            {props.description}
          </p>
        </div>
      </div>
    </section>
  );
}
export default Card;
