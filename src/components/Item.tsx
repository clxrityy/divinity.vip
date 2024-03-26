import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import Link from "next/link";
import { ComponentProps } from "react";

type Props = {
    data: QueryDocumentSnapshot<DocumentData, DocumentData>;
    postType: "confession" | "advice" | "story";
} & ComponentProps<"div">

const date = new Date();


export default function Item({ postType, data, ...props }: Props) {

    date.setTime(Number(data.get("date")));


    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getUTCHours();

    if (!data) {
        return;
    }

    if (postType === "confession") return (
        <div {...props} className="bg-gradient-to-l from-sky-300/50 to-sky-400/25 px-4 py-2 lg:px-4 lg:py-4 hover:scale-95 transition-all rounded-md hover:ring hover:ring-sky-700 hover:focus-inset-8 duration-200 hover:shadow drop-shadow w-full">
            <Link href={`/confessions/${data.get("uuid")}`} className="w-full">
                <div className="flex items-center justify-center text-start">
                    <p className="text-base">
                        {data.get("content")}
                    </p>
                </div>
                <div className="flex flex-col items-end w-full text-sm text-gray-700 font-mono mt-2">
                    <span className="text-xs">
                        {`${hour}:00`}
                    </span>
                    <span className="text-sm">
                        {`${month}/${day}`}
                    </span>
                </div>
            </Link>
        </div>
    );

    if (postType === "advice") return (
        <div {...props}
            className="bg-gradient-to-br from-gray-200/50 to-gray-500/25 px-4 py-2 lg:px-4 lg:py-4 hover:scale-95 transition-all rounded-md hover:drop-shadow shadow hover:ring hover:ring-red-400/25"
        >
            <Link href={`/advice/${data.get("uuid")}`} className="w-full">
                <div className="flex items-center justify-center text-start">
                    <p className="text-base">
                        {data.get("content")}
                    </p>
                </div>
                <div className="flex flex-col items-end w-full text-sm text-gray-700 font-mono mt-2">
                    <span className="text-xs">
                        {`${hour}:00`}
                    </span>
                    <span className="text-sm">
                        {`${month}/${day}`}
                    </span>
                </div>
            </Link>
        </div>
    );

    if (postType === "story") return (
        <div {...props} className="bg-gradient-to-tr from-emerald-400/25 to-emerald-200/50 px-4 py-2 lg:px-4 lg:py-4 hover:scale-95 transition-all rounded-md hover:drop-shadow shadow hover:ring hover:ring-emerald-300/25">
            <Link href={`/stories/${data.get("uuid")}`} className="w-full">
                <div className="flex items-center justify-center text-center">
                    <p className="text-lg font-semibold text-gray-600 hover:text-sky-700 hover:underline underline-offset-2 transition-all">
                        {data.get("title")}
                    </p>
                </div>
                <div className="flex flex-col items-end w-full text-sm text-gray-700 font-mono mt-2">
                    <span className="text-xs">
                        {`${hour}:00`}
                    </span>
                    <span className="text-sm">
                        {`${month}/${day}`}
                    </span>
                </div>
            </Link>
        </div>
    )
}