import Image from "next/image";

function Badge(props) {
  return (
    <section>
      <div className="rounded w-[300px] drop-shadow-xl  h-[350px] bg-[#e1ebfa] ">
        <Image src={props.image} />{" "}
        <p className="not-italic font-bold text-base leading-5 m-0 pl-2 text-[#486a6f]">
          Name Surname
        </p>
        <p className="pl-2 not-italic font-medium text-base leading-8 m-0 text-[#678c92]">
          Worker
        </p>
      </div>
    </section>
  );
}

export default Badge;
