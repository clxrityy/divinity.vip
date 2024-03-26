import type { Metadata, ResolvingMetadata } from "next";
import { Toaster } from "react-hot-toast";

export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {

    return {
        title: "divinity | admin",
    }
}

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return <div className="w-full h-full">
        <div className="relative w-full h-full">
            <div className="absolute top-0 right-0">
                
            </div>
        </div>
        <Toaster />
        {children}
    </div>
}