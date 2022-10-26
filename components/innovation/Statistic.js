import Image from "next/image";
import Icon1 from "../../public/vectors/icon1.svg";
import vector1 from "../../public/vectors/vector1.svg";
import vector2 from "../../public/vectors/vector2.svg";
import vector3 from "../../public/vectors/vector3.svg";
import vector4 from "../../public/vectors/vector4.svg";
import vector5 from "../../public/vectors/vector5.svg";
import classes from "./Statistic.module.css";

function Statistic() {
  return (
    <section className={classes.statistic}>
      <div className={classes.bg}></div>

      <h4 className={classes.statistic__title}>Socials</h4>
      <p className={classes.statistic__subject}>On statistic</p>

      <div className={classes.statistic__comparisons}>
        <div className={classes.statistic__comparison}>
          <Image src={Icon1} />
          <div className={classes.statistic__greater}>
            <p className={classes.statistic__subtitle}>{">200"}</p>
            <p className={classes.statistic__desc}>Number</p>
          </div>
        </div>
        <hr></hr>
        <div className={classes.statistic__comparison}>
          <Image src={Icon1} />
          <div className={classes.statistic__greater}>
            <p className={classes.statistic__subtitle}>{">200"}</p>
            <p className={classes.statistic__desc}>Number</p>
          </div>
        </div>
        <hr></hr>
        <div className={classes.statistic__comparison}>
          <Image src={Icon1} />
          <div className={classes.statistic__greater}>
            <p className={classes.statistic__subtitle}>{">200"}</p>
            <p className={classes.statistic__desc}>Number</p>
          </div>
        </div>
      </div>

      <div className={classes.statistic__container}>
        <hr className={classes.statistic__border}></hr>
        <div className={classes.statistics}>
          <Image src={vector1} />
          <Image src={vector2} />
          <Image src={vector3} />
          <Image src={vector4} />
          <Image src={vector5} />
        </div>
        <hr className={classes.statistic__border}></hr>
      </div>
    </section>
  );
}

export default Statistic;
