import { getAdviceByUuid } from "@/app/_actions/advice";
import Error from "@/components/ui/Error";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { id: string };
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const id = params.id;

    const advice = await getAdviceByUuid(id);

    return {
        title: "advice",
        openGraph: {
            description: advice?.content,
            authors: "anonymous"
        }
    }
}


export default async function AdvicePost({ params }: Props) {
    
    const postUuid = params.id;

    const advice = await getAdviceByUuid(postUuid);

    if (!advice) {

        return <Error info="piece of advice: go to a route that actually exists" />
    }

    const date = new Date();
    date.setTime(Number(advice.date));
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();
    const hour = date.getUTCHours();

    return (
        <main className="flex items-center justify-center w-full h-full relative">
            <div className="h-[80vh] w-full flex items-center justify-center flex-col gap-16">
                <h1 className="text-4xl font-bold tracking-wider text-gray-700/80">
                    advice
                </h1>
                <h1 className="text-center text-4xl font-mono flex flex-col items-center gap-1">
                    <span>
                        {`${month}/${day}/${year}`}
                    </span>
                    <span className="text-2xl">
                        {`${hour}:00`}
                    </span>
                </h1>
                <div className="border mx-auto px-16 py-16 rounded-md border-gray-600/75 border-separate shadow-inner bg-gray-300/25 flex flex-col items-start gap-2">
                    <h4 className="text-xl xl:text-2xl text-gray-600">
                        {advice.content}
                    </h4>
                    <p className="font-semibold text-sm text-gray-600/75 italic">
                        ~ anonymous
                    </p>
                </div>
            </div>

            <div className="absolute top-0 right-0 px-4 py-4">
                <div className="flex flex-col items-end justify-center gap-1">
                    <p className="text-lg">
                        advice
                    </p>
                    <p className="text-[0.5rem]">
                        {advice.uuid}
                    </p>
                </div>
            </div>
        </main>
    )
}