import Link from "next/link"

async function getPostsData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

export default async function Posts() {
  const posts = await getPostsData()
  return (
    <div>
      <h1 className="text-3xl mb-12">Post list</h1>

        { posts.map(post => (
          <div key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </div>
        ))}

    </div>
  )
}