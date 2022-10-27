import vector1 from "../../public/vectors/vector1.svg";
import vector2 from "../../public/vectors/vector2.svg";
import vector3 from "../../public/vectors/vector3.svg";
import vector4 from "../../public/vectors/vector4.svg";
import vector5 from "../../public/vectors/vector5.svg";

import Image from "next/image";

function Symbol() {
  return (
    <section>
      <div className="logo">
        <hr
          className="left-0 my-[3rem] mx-auto
w-[90%] right-0 top-0 border-[#678c92] bg-gray-600 bottom-[99.06%] "
        ></hr>
        <div
          className="flex

gap-[40px]
my-[3rem] mx-auto
w-[90%]
max-w-[40rem]"
        >
          <Image src={vector1} />
          <Image src={vector2} />
          <Image src={vector3} />
          <Image src={vector4} />
          <Image src={vector5} />
        </div>
        <hr
          className="left-0 my-[3rem] mx-auto
w-[90%] right-0 top-0 border-[#678c92] border-[1px] bg-gray-600 bottom-[99.06%] "
        ></hr>
      </div>
    </section>
  );
}

export default Symbol;
