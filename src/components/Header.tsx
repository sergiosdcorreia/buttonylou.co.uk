import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"

import { Bounded } from "./Bounded"

export default async function Header() {
  const client = createClient()
  const settings = await client.getSingle("settings")

  return (
    <header className="absolute top-0 w-full z-10 backdrop-blur-lg [ bg-gradient-to-b from-white/60 to-white/30 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ] ~p-4/6">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/ButtonyLou_logo.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>
        <Bounded as="nav" className="~py-4/6">
          <ul className='flex flex-wrap justify-center gap-8 ~text-lg/xl'>
            {settings.data.navigation.map((item) => (
              <li key={item.link.text} className='hover:opacity-75'>
                <PrismicNextLink field={item.link} />
              </li>
            ))}
          </ul>
        </Bounded>
      </div>
    </header>
  )
}