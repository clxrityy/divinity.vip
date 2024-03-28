"use client";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import { ComponentProps, useState } from "react";
import Button from "../ui/Button";


type Props = {
    posts: QueryDocumentSnapshot<DocumentData, DocumentData>[];
} & ComponentProps<"div">;

export default function AllPosts({ posts, ...props }: Props) {

    const [showPosts, setShowPosts] = useState<boolean>(false);

    return (
        <div {...props} className="flex flex-col items-center justify-center mx-auto w-full h-full">
            {
                !showPosts ? <Button btnColor="grey" onClick={() => setShowPosts(!showPosts)}>
                    show posts
                </Button>
                    : <div className="border border-red-400 px-4 py-2 flex items-center flex-col justify-center text-center rounded-md">
                        
                    </div>
            }
        </div>
    );
}