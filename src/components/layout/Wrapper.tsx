"use client";

import { ComponentProps, FormEvent } from "react";
import PostForm from "../PostForm";
import toast from "react-hot-toast";
import { createPost } from "@/app/_actions/post";

type Props = {
    postType: "confession" | "advice" | "story";
} & ComponentProps<"div">;

const Wrapper = ({ postType, ...props }: Props) => {


    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            await createPost(formData, postType).then(() => {
                toast.success("Posted!")
            });
        } catch (err) {
            toast.error(`Error posting!`);
            console.log(err);
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

export default Wrapper