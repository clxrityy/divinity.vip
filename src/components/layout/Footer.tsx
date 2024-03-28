import config from "@/config";
import Link from "next/link";
import { ComponentProps } from "react";

type Props = {} & ComponentProps<"footer">;

export default function Footer({ ...props }: Props) {

    return <footer className="h-full w-full">
        <div className="relative">
            <p className="text-xs text-right px-2 py-1 bottom-0 left-0 absolute">
                &copy; 2024 divinity
            </p>
            <Link href="https://github.com/clxrityy/divinity.vip" className="px-2 py-2 bottom-0 right-0 absolute">
                <config.icons.github className="hover:scale-125 transition-transform" size={18} />
            </Link>
        </div>
    </footer>
}