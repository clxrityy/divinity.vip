import config from "@/config";
import Button from "../ui/Button";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="h-[65vh] font-semibold w-full">
            <div className="flex flex-col items-center justify-between gap-16 w-full">
                <div className="flex flex-col items-center justify-center w-full gap-5">
                    <config.icons.globe size={150} className="animate-spin-slower text-gray-800/50" />
                    <h1 className="text-lg md:text-xl lg:text-2xl text-gray-800/80 hero-text max-w-xs text-center">
                        share notes with the world anonymously
                    </h1>
                </div>
                <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex flex-col items-center justify-center gap-4">
                    <Link href="/confessions" className="w-full">
                        <Button solid btnColor="grey">
                            confessions
                        </Button>
                    </Link>
                    <Link href="/advice" className="w-full">
                        <Button solid btnColor="grey">
                            advice
                        </Button>
                    </Link>
                    <Link href="/stories" className="w-full">
                        <Button solid btnColor="grey">
                            stories
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero