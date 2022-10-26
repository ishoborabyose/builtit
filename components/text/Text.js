import classes from "./text.module.css";
function Text(props) {
  return (
    <section>
      <h4 className={classes.instagram__title}>{props.title}</h4>
      <p className={classes.instagram__subject}>{props.description}</p>
    </section>
  );
}
export default Text;
