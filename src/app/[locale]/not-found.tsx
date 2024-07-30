import { Link } from '@settings/navigation'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main>
      <section className={`mx-auto min-h-full max-w-[1400px] bg-[url('/404/bg.jpg')] bg-cover bg-center bg-no-repeat px-[15px]`}>
        <Image className={`mx-auto`} src={'/404/bg.jpg'} alt={'404 image'} width={1373} height={727} priority />
      </section>
    </main>
  )
}
