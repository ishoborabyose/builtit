import classes from "./AboutBanner.module.css";
import Image from "next/image";
import image from "../../public/images/AboutBanner.png";
import Subject from "../subject/Subject";

function AboutBanner() {
  return (
    <section>
      <div className={classes.logo__about}>
        <div className={classes.logo__image}>
          <Image src={image} />
        </div>

        <div className={classes.logo__left}>
          <Subject
            title="About us"
            description=" Owner and investor with a reputation"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
