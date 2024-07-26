import Link from 'next/link'
 
interface Post {
  id: string,
  slug: string,
  title: string
}

export default function PostList({ posts }: { posts: Array<Post> }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/dashboard/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}