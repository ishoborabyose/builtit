import classes from "./MainNav.module.css";
import Link from "next/link";

function MainNav() {
  return (
    <section className={classes.header}>
      <div>
        <div className={classes.header__bg}></div>

        <div className={classes.header__bg1}></div>
      </div>
      <header className={classes.header__container}>
        <div></div>
        <div className={classes.logo__items}>
          <div className={classes.logo}></div>
          <p className={classes.logo__item}>
            {" "}
            <Link href="/">Buildit</Link>
          </p>
        </div>
        <ul className={classes.items}>
          <li className={classes.items__title}>
            {" "}
            <Link href="/about">About</Link>
          </li>
          <li className={classes.items__title}>
            {" "}
            <Link href="/services">Services</Link>
          </li>
          <li className={classes.items__title}>
            {" "}
            <Link href="/project">Project</Link>
          </li>
          <li className={classes.items__title}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <button className={classes.btn}>Need a project?</button>
      </header>

      <div></div>
    </section>
  );
}

export default MainNav;
