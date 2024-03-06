import config from "@/config";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return (
        <div className="relative">
            <Link href="/" className="title-link">
                <config.icons.logo size={30} />
                <h1>
                    divinity
                </h1>
            </Link>
        </div>
    );
}

export default Navbar