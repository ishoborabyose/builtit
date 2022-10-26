import classes from "./Banner.module.css";
import Image from "next/image";
import Rectangle1 from "../../public/images/Rectangle1.png";
import Rectangle2 from "../../public/images/Rectangle2.png";
import Rectangle3 from "../../public/images/Rectangle3.png";
import Rectangle4 from "../../public/images/Rectangle4.png";
import Rectangle5 from "../../public/images/Rectangle5.png";

function Banner() {
  return (
    <section className={classes.banner}>
      <div className="banner__left">
        <p className={classes.banner__title}>Development company</p>
        <p className={classes.banner__description}>
          Forward-thinking real estate developer, owner and investor with a
          reputation
        </p>
        <div className={classes.btn__container}>
          <button className={classes.btn__service}> Services</button>
          <button className={classes.btn__about}>About the company</button>
        </div>
      </div>
      <div className={classes.banner__images}>
        <div className={classes.banner__topimages}>
          <div>
            <Image src={Rectangle1} alt="picture" />
          </div>

          <div>
            <Image src={Rectangle3} alt="picture" />
          </div>

          <div>
            <Image src={Rectangle5} alt="picture" />
          </div>
        </div>

        <div className={classes.banner__bottomimages}>
          <div>
            <Image src={Rectangle2} alt="picture" />
          </div>

          <div>
            {" "}
            <Image src={Rectangle4} alt="picture" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
