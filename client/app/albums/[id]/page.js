// Suspense loading in SC

import { Suspense } from 'react'

export default async function AlbumDetails({ params }) {
  const albumId = params.id
  const albumData = getAlbum(albumId)
  const photoData = getPhotos(albumId)

  // resolve parent data
  const album = await albumData
  return (
    <div>
      <div>Album title: {album.title}</div>
      <hr />
      <div>Photos:</div>
      <Suspense fallback={<div>Loading photos ... </div>}>
        <Photos promise={photoData} />
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
async function Photos({ promise }) {
  // Wait for the albums promise to resolve
  const photos = await promise;
  return (
    <ul>
      {photos.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  )
}
