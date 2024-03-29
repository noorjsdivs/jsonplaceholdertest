import Container from "./Container";

const Banner = () => {
  return (
    <Container className="py-20 flex flex-col gap-y-5">
      <h1 className="text-6xl mb-10">{`{JSON} Placeholder`}</h1>
      <p className="text-xl">
        Free fake and reliable API for testing and prototyping.
      </p>
      <p className="text-xl">
        Powered by JSON <span className="underline font-medium">Server</span> +
        <span className="underline font-medium">LowDB</span>.
      </p>
      <p className="mt-5 text-base font-bold">
        Serving ~3 billion requests each month.
      </p>
    </Container>
  );
};

export default Banner;
