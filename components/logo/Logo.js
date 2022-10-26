import classes from "./logo.module.css";
import Image from "next/image";
import vector1 from "../../public/vectors/vector1.svg";
import vector2 from "../../public/vectors/vector2.svg";
import vector3 from "../../public/vectors/vector3.svg";
import vector4 from "../../public/vectors/vector4.svg";
import vector5 from "../../public/vectors/vector5.svg";
import image from "../../public/images/image-logo.jpg";

function Logo() {
  return (
    <section className={classes.logo}>
      <div className={classes.bg}></div>
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
          <button className={classes.logo__btn}>Explore</button>
        </div>
      </div>
    </section>
  );
}

export default Logo;
