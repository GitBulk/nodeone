import Image from 'next/image'

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hello and welcome
        <span className='whitespace-nowrap'>
          I am <span className='font-bold'>Kaka</span>
        </span>
      </p>
    </main>
  )
}
