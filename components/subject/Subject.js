import classes from "./subject.module.css";

function Subject(props) {
  return (
    <section>
      <h4 className={classes.logo__title}>{props.title}</h4>
      <p className={classes.logo__subject}>{props.description}</p>
      <p className={classes.logo__description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem,
        vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros
        vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim
        magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit
        molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices
        in, congue sed ex.
      </p>
    </section>
  );
}
export default Subject;
