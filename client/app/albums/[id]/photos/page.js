import { Suspense } from 'react'

export default async function PhotosInAlbum({ params }) {
  const albumId = params.id
  const album = await getAlbum(albumId)
  return (
    <div>
      <div style={{ color: 'red' }}>Album title: {album.title}</div>
      <hr />
      <Suspense fallback={<div>Loading photos ... </div>}>
        <Photos albumId={album.id} />
      </Suspense>
    </div>
  )
}

async function getAlbum(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
  return res.json()
}

async function getPhotos(albumId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
  return res.json()
}

// Photos Component
async function Photos({ albumId }) {
  const photos = await getPhotos(albumId)
  return (
    <>
      <div>Photos:</div>
      <ul>
        {photos.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  )
}