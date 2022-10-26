import Image from "next/image";
import Icon1 from "../../public/vectors/icon1.svg";

import classes from "./Innovation.module.css";

function Innovation() {
  return (
    <section className={classes.innovation}>
      <div className={classes.bg}></div>

      <div className={classes.innovation__container}>
        <p className={classes.innovation__title}>Innovative Execution</p>
        <div className={classes.innovation__cards}>
          <div className={classes.innovation__card}>
            <Image src={Icon1} />
            <p className={classes.innovation__subtitle}>Featured Listing</p>
            <p className={classes.innovation__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className={classes.innovation__card}>
            <Image src={Icon1} />
            <p className={classes.innovation__subtitle}>Featured Listing</p>
            <p className={classes.innovation__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className={classes.innovation__card}>
            <Image src={Icon1} />
            <p className={classes.innovation__subtitle}>Featured Listing</p>
            <p className={classes.innovation__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
