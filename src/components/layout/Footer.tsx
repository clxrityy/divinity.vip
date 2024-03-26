import { ComponentProps } from "react";

type Props = {} & ComponentProps<"footer">;

export default function Footer({...props}: Props) {

    return <footer className="relative h-full w-full">
        <div className="absolute bottom-0 left-0">
            <p className="text-xs text-right px-2 py-1">
                &copy; 2024 divinity
            </p>
        </div>
    </footer>
}