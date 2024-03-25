import { getStoryByUuid } from "@/app/_actions/stories";
import Error from "@/components/ui/Error";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {

    const id = params.id;

    const story = await getStoryByUuid(id);

    return {
        title: `story | ${story?.title}`,
        description: story?.content || "",
    }
}

export default async function StoryPost({ params }: Props) {
    
    const postUuid = params.id;

    const story = await getStoryByUuid(postUuid);

    if (!story) {
        return <Error info="this story must've not been told yet" />
    }

    const date = new Date();
    date.setTime(Number(story.date));
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();
    const hour = date.getUTCHours();


    return (
        <main className="flex items-center justify-center w-full h-full relative">
            <div className="h-[60vh] w-full flex items-center justify-center flex-col gap-16">
                <h1 className="text-center text-4xl tracking-wider font-bold text-emerald-700/45">
                    story
                </h1>
                <h1 className="text-center text-4xl font-mono flex flex-col items-center gap-1 text-emerald-950/50">
                    <span>
                        {`${month}/${day}/${year}`}
                    </span>
                    <span className="text-2xl">
                        {`${hour}:00`}
                    </span>
                </h1>
                <div className="border mx-auto px-16 py-16 rounded-md border-emerald-600/75 border-separate shadow-inner bg-emerald-300/25 flex flex-col items-start gap-2">
                    <p className="w-full text-end mb-5 font-bold -mt-3">
                        {story.title}
                    </p>
                    <h4 className="text-base md:text-lg lg:text-xl text-gray-600">
                        {story.content}
                    </h4>
                    <p className="font-semibold text-sm text-gray-600/75 italic">
                        ~ anonymous
                    </p>
                </div>
            </div>

            <div className="absolute top-0 right-0 px-4 py-4">
                <div className="flex flex-col items-end justify-center gap-1">
                    <p className="text-lg">
                        story
                    </p>
                    <p className="text-[0.5rem]">
                        {story.uuid}
                    </p>
                </div>
            </div>
        </main>
    )
}