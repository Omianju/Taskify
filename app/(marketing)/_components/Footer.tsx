import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export const Footer = () => {
    return (
        <div className="w-full fixed bottom-0 p-4 bg-slate-100 flex border-t">
            <div className="w-full md:max-w-screen-2xl mx-auto flex items-center justify-between">
                <Logo />
                <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
                    <Button size={"sm"} variant={"ghost"} >
                        Privacy Policy
                    </Button>
                    <Button size="sm" variant="ghost" >
                        Terms of Services                      
                    </Button>
                </div>
            </div>
        </div>
    )
}