import config from "@/config";
import Button from "../ui/Button";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="h-[65vh] font-semibold w-full">
            <div className="flex flex-col items-center justify-center gap-16">
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <config.icons.globe size={150} className="animate-spin-slower text-sky-800/50" />
                    <h1 className="text-lg md:text-xl lg:text-2xl text-gray-800/80 hero-text max-w-xs text-center">
                        share notes with the world anonymously
                    </h1>
                </div>
                <div className="w-full lg:w-2/3 flex flex-col items-center justify-evenly gap-4">
                    <Button solid>
                        <Link href="/confessions">
                        confessions
                        </Link>
                    </Button>
                    <Button solid>
                        <Link href="/advice">
                            advice
                        </Link>
                    </Button>
                    <Button solid>
                        <Link href="/stories">
                            stories
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Hero