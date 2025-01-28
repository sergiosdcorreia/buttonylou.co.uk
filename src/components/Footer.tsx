import { createClient } from '@/prismicio'
import { asImageSrc } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import Image from 'next/image'

import { Bounded } from './Bounded'
import { FooterPhysics } from './FooterPhysics'

export default async function Footer() {
  const client = createClient()
  const settings = await client.getSingle("settings")

  const pencilTextureURLs = settings.data.footer_pencils
    .map((item) => asImageSrc(item.pencil, {h: 600}))
    .filter((url):url is string => Boolean(url))

  return (
    <footer className='bg-zinc-800 overflow-hidden h-[100vh]'>
      <div className='relative h-[75vh] ~p-10/16'>
      <PrismicNextImage field={settings.data.footer_image} alt='' fill className='object-cover' width={1200} />
      <FooterPhysics pencilTextureURLs={pencilTextureURLs} className='absolute inset-0 overflow-hidden' />
      <Image
        src="/ButtonyLou_logo.jpg"
        alt='logo'
        width={100}
        height={100}
        className='relative h-20 w-20 md:h-28 md:w-28 rounded-full pointer-events-none select-none'
      />
      </div>
      <Bounded as="nav">
        <ul className='flex flex-wrap justify-center gap-8 ~text-lg/xl'>
          {settings.data.navigation.map((item) => (
            <li key={item.link.text} className='hover:underline'>
              <PrismicNextLink field={item.link} className='text-white' />
            </li>
          ))}
        </ul>
      </Bounded>
    </footer>
  )
}