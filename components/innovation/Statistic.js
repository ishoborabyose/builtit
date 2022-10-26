import Image from "next/image";
import Icon1 from "../../public/vectors/icon1.svg";
import Symbol from "../symbol/Symbol";
import classes from "./Statistic.module.css";
import Text from "../text/Text";

function Statistic() {
  return (
    <section className={classes.statistic}>
      <div className={classes.bg}></div>

      <Text title="Socials" description="On statistic" />

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

      <Symbol />
    </section>
  );
}

export default Statistic;
