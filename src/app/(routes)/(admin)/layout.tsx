import config from "@/config";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: "divinity | admin",
    }
}

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return <div className="h-auto">
        <div className="w-full h-full">
            <div className="absolute top-0 right-0 h-full py-4 px-4 text-sky-800">
                <config.icons.admin size={25} />
            </div>
        </div>
        <Toaster />
        {children}
    </div>
}