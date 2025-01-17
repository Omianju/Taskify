import Link from 'next/link'
import { Medal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import { cn } from "@/lib/utils"

const headingFont = localFont({
    src: "../../public/fonts/CalSans-SemiBold.woff2"
})

const textFont = Poppins({
    subsets : ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]
})

const MarketingPage = () =>{
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
                <div className="flex mb-4 shadow-sm items-center p-4 rounded-full bg-amber-100 text-amber-700 uppercase">
                    <Medal className="w-6 h-6 mr-2"/>
                    No 1 Task Management
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 ">
                    Takify helps team move
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 rounded-md text-white w-fit pb-4">
                    Work Forword
                </div>
            </div>
            <div className={cn("mt-4 text-neutral-400 text-sm md:text-xl max-w-sm md:max-w-2xl text-center mx-auto", textFont.className)}>
                Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way our team works is unique - accomplish it all with Taskify.
            </div>
            <Button className="mt-6" size="lg" asChild >
                <Link href="/sign-up">
                    Get Taskify for free
                </Link>
            </Button>
        </div>
    )
}

export default MarketingPage