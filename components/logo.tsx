import Link from "next/link"
import localFont  from "next/font/local"
import { cn } from "@/lib/utils"

const LogoFont = localFont({
    src: "../public/fonts/CalSans-SemiBold.woff2"
})

export const Logo = () => {
    return (
      <Link href="/">
        <div className={cn(" items-center text-lg text-neutral-700 hidden md:flex hover:opacity-75 transition gap-x-2", LogoFont.className)}>
            Taskify
        </div>
      </Link>
    )
}