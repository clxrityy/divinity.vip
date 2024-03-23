import { getConfessionByUuid } from "@/app/_actions/confession";
import Error from "@/components/ui/Error";

export default async function ConfessionPost({ params }: { params: { id: string } }) {

    const postUuid = params.id;

    const confession = await getConfessionByUuid(postUuid);

    if (!confession) {

        return <Error info="this confession doesn't exist!" />
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
                <h1 className="text-center text-4xl font-mono flex flex-col items-center gap-1">
                    <span>
                        {`${month}/${day}/${year}`}
                    </span>
                    <span className="text-2xl">
                        {`${hour}:00`}
                    </span>
                </h1>
                <div className="border mx-auto px-16 py-16 rounded-md border-sky-600 border-separate shadow-lg bg-sky-700/25">
                    <h4 className="italic text-xl xl:text-2xl text-gray-600">
                        {confession.content}
                    </h4>
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