import About from "./About";
import classes from "./layout.module.css";
import AboutBanner from "../banner/AboutBanner";

function AboutLayout(props) {
  return (
    <div>
      <About>
        <main className={classes.main}>{props.children}</main>
      </About>
      <AboutBanner />
    </div>
  );
}

export default AboutLayout;
