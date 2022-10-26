import classes from "./footer.module.css";
import Image from "next/image";
import instagram from "../../public/images/instagram.png";
import facebook from "../../public/images/facebook.png";

function Footer() {
  return (
    <section className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__items}>
          <ul className={classes.footer__item}>
            <li className={classes.footer__logo}> Buildit</li>
            <li>Development company, 2022</li>
          </ul>
          <p className={classes.footer__paragraph}>Site design – ⏰ Alarm</p>
        </div>
        <div>
          <ul className={classes.footer__itemserve}>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
          <div className={classes.footer__social}>
            <Image src={instagram} />
            <Image src={facebook} />
          </div>
        </div>
        <ul className={classes.footer__item}>
          <li>About us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className={classes.footer__items}>
          <ul className={classes.footer__item}>
            <li>Get in touch</li>
            <li>60 Manor Station St. Fairport,</li>
            <li>NY 14450</li>
          </ul>
          <ul className={classes.footer__item}>
            <li>708-790-0000</li>
            <li>sales@buildit.site</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
