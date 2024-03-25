import { getConfessionByUuid } from "@/app/_actions/confession";
import Error from "@/components/ui/Error";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { id: string };
}


export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const id = params.id;

    const confession = await getConfessionByUuid(id);

    return {
        title: "confession",
        openGraph: {
            description: confession?.content,
            authors: "anonymous"
        }
    }
}

export default async function ConfessionPost({ params }: Props) {

    const postUuid = params.id;

    const confession = await getConfessionByUuid(postUuid);

    if (!confession) {

        return <Error info="i confess that this confession does not exist" />
    }

    const date = new Date();

    date.setTime(Number(confession.date));

    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();
    const hour = date.getUTCHours();

    return (
        <main className="flex items-center justify-center w-full h-full relative">
            <div className="h-[80vh] w-full flex items-center justify-center flex-col gap-10">
            <h1 className="text-4xl font-bold tracking-wider text-sky-700">
                    confession
                </h1>
                <h1 className="text-center text-4xl font-mono flex flex-col items-center gap-1 text-sky-950/70">
                    <span>
                        {`${month}/${day}/${year}`}
                    </span>
                    <span className="text-2xl">
                        {`${hour}:00`}
                    </span>
                </h1>
                <div className="border mx-auto px-16 py-16 rounded-md border-sky-600/75 border-separate shadow-lg bg-sky-700/25 flex flex-col items-start gap-2">
                    <h4 className="text-xl xl:text-2xl text-gray-600">
                        {confession.content}
                    </h4>
                    <p className="font-semibold text-sm text-gray-600/75 italic">
                        ~ anonymous
                    </p>
                </div>
            </div>

            <div className="absolute top-0 right-0 px-4 py-4">
                <div className="flex flex-col items-end justify-center gap-1">
                    <p className="text-lg">
                        confession
                    </p>
                    <p className="text-[0.5rem]">
                        {confession.uuid}
                    </p>
                </div>
            </div>
        </main>
    )
}