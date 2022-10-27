function Subject(props) {
  return (
    <section className="">
      <h4 className="h-8 not-italic font-medium text-base leading-8 text-[#5bccde] w-[500px]">
        {props.title}
      </h4>
      <p className="h-24 not-italic font-bold text-4xl text-gray-700 w-[500px] leading-[48px]">
        {props.description}
      </p>
      <p className="h-56 not-italic font-medium text-base  text-gray-600 w-[480px]">
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
