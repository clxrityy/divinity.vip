"use server";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { postAdvice } from "./advice";
import { postConfession } from "./confession";
import { postStory } from "./stories";
import { db } from "@/lib/firebase";
import { AnyPost, IPost, IStory } from "@/util/types";

export async function createPost(formData: FormData, postType: "confession" | "advice" | "story") {
    
    let anyPost: AnyPost;
    let postData: IPost | IStory = {
        content: "",
        uuid: "",
        date: Date.now(),
    };

    if (postType === "confession") {
        postData = await postConfession(formData);
    }
    if (postType === "advice") {
        postData = await postAdvice(formData);
    }
    if (postType === "story") {
        postData = await postStory(formData);
    }

    anyPost = {
        postType: postType,
        post: postData,
    }

    try {
        await setDoc(doc(db, "allPosts", anyPost.post.uuid), anyPost);
    } catch (e) {
        throw e;
    }

    return anyPost;
}

export async function getAllPosts(limit?: number) {
    const allDocs = await getDocs(collection(db, "allPosts"));

    if (limit) {
        return allDocs.docs.slice(0, limit);
    }

    return allDocs.docs;
}