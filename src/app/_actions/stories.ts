"use server";
import { IStory } from './../../util/types';
import { db } from "@/lib/firebase";
import uuid from "@/util/uuid";
import { collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";

export async function getStories() {
    const stories = await getDocs(query(collection(db, "stories")));

    return stories.docs;
}

export async function postStory(formData: FormData) {

    const title = formData.get("storyTitle");
    const content = formData.get("story");
    const id = uuid();
    const date = Date.now();


    const post: IStory = {
        title: title!.toString(),
        content: content!.toString(),
        uuid: id,
        date: date,
    };

    try {
        await setDoc(doc(db, "stories", id), post);
    } catch (e) {
        throw e;
    }
}

export async function getStoryByUuid(id: string) {
    const document = await getDoc(doc(db, "stories", id));

    if (!document.exists()) {
        return null;
    }

    const story: IStory = {
        title: document.get("title"),
        content: document.get("content"),
        uuid: id,
        date: document.get("date"),
    }

    return story;
}