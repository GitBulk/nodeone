// Parallel Data Fetching on SC

export default async function Page({ params }) {
  const postId = params.id
  console.log('postId', postId)
  const postData = getPost(postId)
  const commentsData = getComments(postId)
  const [post, comments] = await Promise.all([postData, commentsData])
  return (
    <div>
      <div>Post data</div>
      <pre>{JSON.stringify(post, undefined, 2)}</pre>
      <hr />
      <div>Comment data</div>
      <pre>{JSON.stringify(comments, undefined, 2)}</pre>
    </div>
  )
}

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

async function getComments(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  return response.json()
}
