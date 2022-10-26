import vector1 from "../../public/vectors/vector1.svg";
import vector2 from "../../public/vectors/vector2.svg";
import vector3 from "../../public/vectors/vector3.svg";
import vector4 from "../../public/vectors/vector4.svg";
import vector5 from "../../public/vectors/vector5.svg";
import classes from "./symbol.module.css";
import Image from "next/image";

function Symbol(params) {
  return (
    <section>
      <div className={classes.logo__container}>
        <hr className={classes.logo__border}></hr>
        <div className={classes.logos}>
          <Image src={vector1} />
          <Image src={vector2} />
          <Image src={vector3} />
          <Image src={vector4} />
          <Image src={vector5} />
        </div>
        <hr className={classes.logo__border}></hr>
      </div>
    </section>
  );
}

export default Symbol;
