export default function Layout({
  children,
  title,
  content
}: {
  children: React.ReactNode,
  title: React.ReactNode,
  content: React.ReactNode
}) {
  return (
    <>
      {children}
      {title}
      {content}
    </>
  )
}