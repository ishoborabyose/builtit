import About from "./About";

import AboutBanner from "../banner/AboutBanner";

function AboutLayout(props) {
  return (
    <div>
      <About>
        <main className="w-[90%]  my-[3rem] mx-auto">{props.children}</main>
      </About>
      <AboutBanner />
    </div>
  );
}

export default AboutLayout;
