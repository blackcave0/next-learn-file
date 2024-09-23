import Navbar from "@/components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.slice(0, 5).map((mapData) => {
        return (
          <div key={mapData.id}>
            <h3>{mapData.id}</h3>
            <Link href={`/blog/${mapData.id}`}>
              <h2>{mapData.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;
