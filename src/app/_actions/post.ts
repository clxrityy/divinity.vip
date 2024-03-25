"use server";
import { postAdvice } from "./advice";
import { postConfession } from "./confession";
import { postStory } from "./stories";

export async function createPost(formData: FormData, postType: "confession" | "advice" | "story") {

    if (postType === "confession") {
        return await postConfession(formData);
    }
    if (postType === "advice") {
        return await postAdvice(formData);
    }
    if (postType === "story") {
        return await postStory(formData);
    }
}
