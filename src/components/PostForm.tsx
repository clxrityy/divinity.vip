"use client";
import { ComponentProps, useState } from "react";
import Button from "./ui/Button";
import config from "@/config";

type Props = {
    maxCharacters: number;
    postType: "confession" | "advice" | "story";
} & ComponentProps<"form">;

const PostForm = ({ maxCharacters, postType, ...props }: Props) => {
    
    const [characters, setCharacters] = useState<number>(0);


    const btnTxt = () => {
        if (postType === "confession") return "CONFESS";
        if (postType === "advice") return "SHARE";
        if (postType === "story") return "POST";
    }

    if (postType === "story") return (
        <form {...props} onSubmit={props.onSubmit!} className="w-full gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center justify-between text-center gap-5 h-auto">
                <div className="h-full w-full flex flex-col gap-3 justify-center">
                    <input id="storyTitle" name="storyTitle" required placeholder="title" className="px-2 py-1 rounded-md bg-gray-400/5 border border-sky-800 focus:ring focus:ring-sky-800/75 focus:outline-none ring-offset-1 w-full" />
                    <textarea id="story" name="story" required placeholder="2000 characters max..." onChange={(e) => {
                        e.preventDefault();
                        setCharacters(e.target.value.length);
                    }} className="text-xs" />
                    <div className="w-full flex justify-end">
                        <span className="font-semibold text-sm font-mono">
                            {characters <= maxCharacters && characters > 0 ? characters : characters > 0 && (
                                <span className="text-red-600">
                                    - {(characters - maxCharacters)}
                                </span>
                            )}
                        </span>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center">
                    <div className="h-full flex items-center justify-center w-2/3">
                        <Button type="submit" disabled={characters > maxCharacters || characters < 4}>
                            <div className="flex flex-row items-center text-center gap-1">
                                <config.icons.post />
                                {btnTxt()}
                            </div>
                        </Button>
                    </div>
                </div>
            </div>

        </form>
    )

    return (
        <form {...props} onSubmit={props.onSubmit} ref={props.ref} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2  w-full items-center justify-between text-center gap-5 h-auto mb-10 mt-10">
                <div className="w-full h-full">
                    <textarea id={`${postType}`} placeholder={`${maxCharacters} characters max...`} name={`${postType}`} required onChange={(e) => {
                        e.preventDefault();
                        setCharacters(e.target.value.length);
                    }} className="text-sm" />
                    <div className="w-full flex justify-end">
                        <span className="font-semibold text-sm font-mono">
                            {characters <= maxCharacters && characters > 0 ? characters : characters > 0 && (
                                <span className="text-red-600">
                                    - {(characters - maxCharacters)}
                                </span>
                            )}
                        </span>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="h-full flex items-center justify-center w-2/3">
                        <Button type="submit" disabled={characters > maxCharacters || characters < 4}>
                            <div className="flex flex-row items-center text-center gap-1">
                                <config.icons.post />
                                {btnTxt()}
                            </div>
                        </Button>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default PostForm;