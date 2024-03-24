"use client";
import { ComponentProps, useState } from "react";
import Button from "./ui/Button";
import config from "@/config";

type Props = {
    maxCharacters: number;
    postType: "confession" | "advice" | "story";
} & ComponentProps<"form">;

const PostForm = ({ maxCharacters, postType, ...props }: Props) => {
    // const initialState = {
    //     message: "",
    //     posted: false,
    // }

    // const [state, formAction] = useFormState(postConfession, initialState);
    const [characters, setCharacters] = useState<number>(0);


    const btnTxt = () => {
        if (postType === "confession") return "CONFESS";
        if (postType === "advice") return "SHARE";
        if (postType === "story") return "SHRAE";
    }


    return (
        <form {...props} onSubmit={props.onSubmit} className="w-full h-[40vh]">
            <div className="grid grid-cols-1 lg:grid-cols-2  w-full items-center justify-between text-center gap-5 h-48 lg:h-28 xl:h-auto">
                <div className="w-full h-full">
                    <textarea id={`${postType}`} placeholder={`${maxCharacters} characters max...`} name={`${postType}`} required onChange={(e) => {
                        e.preventDefault();
                        setCharacters(e.target.value.length);
                    }} />
                    <div className="w-full flex justify-end">
                    <span className="font-semibold text-sm font-mono">
                        {characters <= 100 && characters > 0 ? characters : characters > 0 && (
                            <span className="text-red-600">
                                - {(characters - 100)}
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