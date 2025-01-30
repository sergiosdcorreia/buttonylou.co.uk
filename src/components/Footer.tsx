import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'

import { Bounded } from './Bounded'
import { FaInstagram } from "react-icons/fa6";

export default async function Footer() {
  const client = createClient()
  const settings = await client.getSingle("settings")

  return (
    <footer className='flex justify-center bg-zinc-800'>
      <Bounded as="nav">
        <p className='text-white mb-6 text-center'>
          Buttony Lou
        </p>
        <PrismicNextLink field={settings.data.social_media} className='flex justify-center mb-10' >
          <FaInstagram size="32" color='white' />
        </PrismicNextLink>
        <div className='text-center text-white text-sm'>
          <p>© 2025 Buttony Lou</p>
        </div>
      </Bounded>
    </footer>
  )
}