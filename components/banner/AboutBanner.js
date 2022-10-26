import classes from "./AboutBanner.module.css";
import Image from "next/image";
import image from "../../public/images/AboutBanner.png";

function AboutBanner() {
  return (
    <section>
      <div className={classes.logo__about}>
        <div className={classes.logo__image}>
          <Image src={image} />
        </div>

        <div className={classes.logo__left}>
          <h4 className={classes.logo__title}>About us</h4>
          <p className={classes.logo__subject}>
            Owner and investor with a reputation
          </p>
          <p className={classes.logo__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
