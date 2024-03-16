import Container from "@/components/Container";
import Post from "@/components/Post";
import Title from "@/components/Title";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.reactbd.com/api/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Playground = async () => {
  const postsData = await getData();

  return (
    <Container>
      <Title title="Playground for testing purpose:" />
      <div className="my-5 flex items-center gap-5">
        <button className=" bg-black text-gray-200 text-sm font-semibold py-2 px-4 rounded-md hover:bg-black/80 hover:text-white duration-200">
          Posts
        </button>
        <button className=" bg-black text-gray-200 text-sm font-semibold py-2 px-4 rounded-md hover:bg-black/80 hover:text-white duration-200">
          Comments
        </button>
      </div>
      <Post postsData={postsData} />
    </Container>
  );
};

export default Playground;
