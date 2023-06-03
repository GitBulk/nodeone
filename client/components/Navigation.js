import Image from 'next/image'
import Link from 'next/link'
import { TbArrowBigRightFilled } from 'react-icons/tb'

export function Navigation() {
  return (
    <div className='sticky top-0 backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50'>
      <div className='flex justify-between py-5'>
        <Link href='/'>
          <Image src='/images/avatar.jpg' alt='Family Guy' width={70} height={50} />
        </Link>
        <Link
          href='/quiz'
          className='flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600'
        >
          <TbArrowBigRightFilled className='text-lg' />
          Take a Quiz
        </Link>
      </div>
    </div>
  )
}