const index = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>this is post {posts.length}</h1>
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
