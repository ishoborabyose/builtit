import classes from "./logo.module.css";
import Image from "next/image";

import image from "../../public/images/image-logo.jpg";
import Subject from "../subject/Subject";
import Symbol from "../symbol/Symbol";

function Logo() {
  return (
    <section className={classes.logo}>
      <div className={classes.bg}></div>
      <Symbol />

      <div className={classes.logo__about}>
        <div className={classes.logo__image}>
          <Image src={image} />
        </div>

        <div className={classes.logo__left}>
          <Subject
            title="About us"
            description=" Owner and investor with a reputation"
          />

          <button className={classes.logo__btn}>Explore</button>
        </div>
      </div>
    </section>
  );
}

export default Logo;
