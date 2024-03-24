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

    if (postType === "confession") return (
        <div {...props} className="bg-gradient-to-l from-sky-300/50 to-sky-400/25 px-4 py-2 lg:px-4 lg:py-4 hover:scale-95 transition-all rounded-md hover:ring hover:ring-sky-700 hover:focus-inset-8 duration-200 hover:shadow drop-shadow w-full">
            <Link href={`/confessions/${data.get("uuid")}`} className="w-full">
                <div className="flex items-center justify-center text-start">
                    <p className="text-base">
                        {data.get("content")}
                    </p>
                </div>
                <div className="flex flex-col items-end w-full text-sm text-gray-700">
                    <span className="text-xs">
                        {`${hour}:00`}
                    </span>
                    <span>
                        {`${month}/${day}`}
                    </span>
                </div>
            </Link>
        </div>
    );

    if (postType === "advice") return (
        <div {...props}
            className="bg-gradient-to-br from-red-200/50 to-red-500/25 px-4 py-2 lg:px-4 lg:py-4 hover:scale-95 transition-all rounded-md hover:drop-shadow shadow hover:ring hover:ring-red-400"
        >
            <Link href={`/advice/${data.get("uuid")}`} className="w-full">
                <div className="flex items-center justify-center text-start">
                    <p className="text-base">
                        {data.get("content")}
                    </p>
                </div>
                <div className="flex flex-col items-end w-full text-sm text-gray-700">
                    <span className="text-xs">
                        {`${hour}:00`}
                    </span>
                    <span>
                        {`${month}/${day}`}
                    </span>
                </div>
            </Link>
        </div>
    );
}