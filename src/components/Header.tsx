import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="header absolute w-full z-10 backdrop-blur-lg [ bg-gradient-to-b from-white/60 to-white/30 ]
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
        <nav>
          <ul>
            <li>
              About
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}