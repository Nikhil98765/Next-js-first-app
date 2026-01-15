export default async function PostPage({ params }) {
  const { slug } = await params;
  
  return (
    <main>
      <h1>{slug}</h1>
    </main>
  )
}