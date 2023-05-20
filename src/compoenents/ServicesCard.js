function ServicesCard(props) {
  return (
    <section className="cardone grid justify-items-center">
      <img src={props.src} alt="sevices Imge" className="w-12" />

      <h6 className="mb-2 text-secondary">{props.title}</h6>

      <p className="text-gray-300">
        {`  There are many variations of lorem ipsum available,byt the majority have
        sufflored atteration in form,but injected humour`}
      </p>
    </section>
  );
}
export default ServicesCard;
