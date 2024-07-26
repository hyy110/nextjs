import PostList from './postList'

interface Post {
  id: string,
  slug: string,
  title: string
}

export default function page() {
  const linkList: Array<Post> = [
    { id: '1', title: 'dashboard1', slug: 'dashboard1' },
    { id: '2', title: 'dashboard2', slug: 'dashboard2' }
  ]

  return (
    <>
      <div>hello, dashboard</div>
      <PostList posts={linkList} />
    </>
  )
}