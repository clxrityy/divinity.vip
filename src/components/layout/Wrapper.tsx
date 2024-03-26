"use client";

import { ComponentProps, FormEvent } from "react";
import PostForm from "../PostForm";
import toast from "react-hot-toast";
import { createPost } from "@/app/_actions/post";
import { revalidatePath } from "next/cache";
import checkForSpam from "@/util/checkForSpam";

type Props = {
    postType: "confession" | "advice" | "story";
} & ComponentProps<"div">;

const Wrapper = ({ postType, ...props }: Props) => {

    const path = () => {
        if (postType === "confession") return "/confessions";
        if (postType === "advice") return "/advice";
        if (postType === "story") return "/stories";
    }


    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        let content: string = "";

        if (postType === "confession") content = formData.get("confession")?.toString() || "";
        if (postType === "advice") content = formData.get("advice")?.toString() || "";
        if (postType === "story") content = formData.get("story")?.toString() || "";

        let isSpam: { success: boolean, message: string } = {
            success: false,
            message: "loading..."
        };

        isSpam = checkForSpam(content, postType);

        if (isSpam.success) {
            try {
                await createPost(formData, postType).then(() => {
                    toast.success("Posted!")
                });
            } catch (err) {
                toast.error(`Error posting!`);
                console.log(err);
            } finally {
                e.currentTarget!.innerText = "";
    
                revalidatePath(path()!);
            }
        } else {
            toast.error(isSpam.message);
            console.log(`[SPAM DETECTED]\n${postType} -- ${content}`)
        }
    }

    const maxCharacters = () => {
        if (postType === "story") {
            return 2000;
        }
        return 100;
    }

    return (
        <div {...props} className="flex w-1/2 lg:w-2/3 2xl:w-1/2 items-center gap-5">
            <PostForm maxCharacters={maxCharacters()} postType={postType} onSubmit={onSubmit} />
        </div>
    );
}

export default Wrapper;