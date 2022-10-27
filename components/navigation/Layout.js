import MainNav from "./MainNav";
import Banner from "../banner/Banner";

function Layout(props) {
  return (
    <div>
      <MainNav>
        <main className="w-[90%]  my-[3rem] mx-auto">{props.children}</main>
      </MainNav>
      <Banner />
    </div>
  );
}

export default Layout;
