"use client";

import { postConfession } from "@/app/_actions/confession";
import { FormEvent } from "react";
import PostForm from "../PostForm";
import toast from "react-hot-toast";

const Wrapper = () => {
    

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            await postConfession(formData).then(() => {
                toast.success("Confessed!")
            });
        } catch (err) {
            toast.error(`Error confessing!`);
            console.log(err);
        }
        
    }

    return (
        <div className="flex w-1/2 lg:w-2/3 2xl:w-1/2 items-center gap-5">
            <PostForm onSubmit={onSubmit} />
        </div>
    );
}

export default Wrapper