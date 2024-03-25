import { Metadata } from "next";
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
    title: "divinity | posts",
    openGraph: {
        description: "anonymous confessions, advice, and stories"
    }
}

export default function RoutesLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return <div className="w-full h-full flex items-center justify-center">
        <Toaster />
        {children}
    </div>
}