import styles from "@/app/Posts.module.css";

interface Post {
  id: number;
  title: string;
}

// app/posts/page.tsx
export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3", {
    cache: "no-store", // tương đương getServerSideProps (không cache)
  });
  const posts = await response.json();

  return (
    <div className={styles["post-box-list"]}>
      {posts.map((post : Post) => (
        <div key={post.id} className={styles["post-box"]}>
          <div>{post.title}</div>
        </div>
      ))}
    </div>
  );
}
