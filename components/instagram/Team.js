import Image from "next/image";
import gram1 from "../../public/images/gram1.png";
import gram2 from "../../public/images/gram2.png";
import gram3 from "../../public/images/gram3.png";
import gram4 from "../../public/images/gram4.png";
import gram5 from "../../public/images/gram5.png";
import gram6 from "../../public/images/gram6.png";
import Text from "../text/Text";
import classes from "./team.module.css";
function Team() {
  return (
    <section className={classes.team}>
      <div className={classes.bg}></div>

      <div className={classes.team__container}>
        <Text title="Our Team" description="Let&#39;s meet" />

        <div className={classes.team__images}>
          <div className={classes.team__image}>
            <div className={classes.team__profile}>
              <Image src={gram1} />
              <p className={classes.team__name}>Name Surname</p>
              <p className={classes.team__surname}>Worker</p>
            </div>
            <div className={classes.team__profile}>
              <Image src={gram2} />
              <p className={classes.team__name}>Name Surname</p>
              <p className={classes.team__surname}>Worker</p>
            </div>
            <div className={classes.team__profile}>
              <Image src={gram3} />
              <p className={classes.team__name}>Name Surname</p>
              <p className={classes.team__surname}>Worker</p>
            </div>
          </div>

          <div className={classes.team__image}>
            <div className={classes.team__profile}>
              <Image src={gram4} />
              <p className={classes.team__name}>Name Surname</p>
              <p className={classes.team__surname}>Worker</p>
            </div>
            <div className={classes.team__profile}>
              <Image src={gram5} />
              <p className={classes.team__name}>Name Surname</p>
              <p className={classes.team__surname}>Worker</p>
            </div>
            <div className={classes.team__profile}>
              <Image src={gram6} />
              <p className={classes.team__name}>Name Surname</p>
              <p className={classes.team__surname}>Worker</p>
            </div>
          </div>

          <div className={classes.team__image}>
            <div className={classes.team__profile}>
              <Image src={gram1} />
              <p className={classes.team__name}>Name Surname</p>
              <p className={classes.team__surname}>Worker</p>
            </div>
            <div className={classes.team__profile}>
              <Image src={gram1} />
              <p className={classes.team__name}>Name Surname</p>
              <p className={classes.team__surname}>Worker</p>
            </div>
            <div className={classes.team__profile}>
              <Image src={gram1} />
              <p className={classes.team__name}>Name Surname</p>
              <p className={classes.team__surname}>Worker</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.statistic__container}>
        <hr className={classes.statistic__border}></hr>
        <div className={classes.statistics}>
          <p className={classes.team__lastP}>Call us</p>
          <div className={classes.btn__container}>
            <button className={classes.btn__service}>Call</button>
            <button className={classes.btn__about}>Email</button>
          </div>
        </div>
        <hr className={classes.statistic__border}></hr>
      </div>
    </section>
  );
}

export default Team;
