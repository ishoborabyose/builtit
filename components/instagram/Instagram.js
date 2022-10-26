import Image from "next/image";
import gram1 from "../../public/images/gram1.png";
import gram2 from "../../public/images/gram2.png";
import gram3 from "../../public/images/gram3.png";
import gram4 from "../../public/images/gram4.png";
import gram5 from "../../public/images/gram5.png";
import gram6 from "../../public/images/gram6.png";
import Text from "../text/Text";
import classes from "./instagram.module.css";
function Instagram() {
  return (
    <section className={classes.instagram}>
      <div className={classes.bg}></div>

      <div className={classes.instagram__container}>
        <Text title="Socials" description="On Instagram" />

        <div className={classes.instagram__images}>
          <div className={classes.instagram__image}>
            <Image src={gram1} />
            <Image src={gram2} />
            <Image src={gram3} />
          </div>

          <div className={classes.instagram__image}>
            <Image src={gram4} />
            <Image src={gram5} />
            <Image src={gram6} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instagram;
