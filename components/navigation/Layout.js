import MainNav from "./MainNav";
import Banner from "../banner/Banner";
import classes from "./layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNav>
        <main className={classes.main}>{props.children}</main>
      </MainNav>
      <Banner />
    </div>
  );
}

export default Layout;
