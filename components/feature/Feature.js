import classes from "./feature.module.css";
import Image from "next/image";
import Photo1 from "../../public/images/Photo1.png";
import Photo2 from "../../public/images/Photo2.png";
import Photo3 from "../../public/images/Photo3.png";
import Photo4 from "../../public/images/Photo4.png";
import Subject from "../subject/Subject";
function Feature() {
  return (
    <section className={classes.feature}>
      <div className={classes.feature__bg}></div>
      <div className={classes.feature__about}>
        <div className={classes.feature__left}>
          <Subject
            title="About us"
            description=" Owner and investor with a reputation"
          />

          <button className={classes.feature__btn}>Explore</button>
        </div>

        <div className={classes.feature__images}>
          <div className={classes.feature__image}>
            <Image className={classes.pic1} src={Photo1} />
            <Image className={classes.pic3} src={Photo3} />
          </div>
          <div className={classes.feature__image2}>
            <Image className={classes.pic2} src={Photo2} />
            <Image className={classes.pic4} src={Photo4} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
