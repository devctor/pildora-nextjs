import Image from "next/image"

async function getPostData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

async function getPostAuthorData() {
  const res = await fetch('https://random-data-api.com/api/v2/users', { 
    cache: 'no-store' 
})
  return res.json()
}

export default async function Post({params}: any) {
  const [post, author] = await Promise.all([getPostData(params.id), getPostAuthorData()])
  // console.log('hey()', post, author)
  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="text-3xl capitalize pb-4">{post.title}</h3>
     <Image src="https://cataas.com/cat" alt="cat" width="200" height="222"/>
     <span className="block my-4 text-slate-400">{author.first_name} {author.last_name}</span>
      <p className="max-w-xs">{post.body}</p>
    </div>
  )
}