function Text(props) {
  return (
    <section>
      <h4 className="h-8 m-auto not-italic font-medium text-base leading-8 text-center text-[#5bccde] w-[500px]">
        {props.title}
      </h4>
      <p className="text-center h-24 m-auto not-italic font-bold text-4xl text-[#486a6f] leading-[48px] w-[500px]">
        {props.description}
      </p>
    </section>
  );
}
export default Text;
