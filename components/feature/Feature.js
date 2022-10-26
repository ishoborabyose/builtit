import classes from "./feature.module.css";
import Image from "next/image";
import Photo1 from "../../public/images/Photo1.png";
import Photo2 from "../../public/images/Photo2.png";
import Photo3 from "../../public/images/Photo3.png";
import Photo4 from "../../public/images/Photo4.png";
function Feature() {
  return (
    <section className={classes.feature}>
      <div className={classes.feature__bg}></div>
      <div className={classes.feature__about}>
        <div className={classes.feature__left}>
          <h4 className={classes.feature__title}>Available Properties</h4>
          <p className={classes.feature__subject}>Featured Listing</p>
          <p className={classes.feature__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>
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
