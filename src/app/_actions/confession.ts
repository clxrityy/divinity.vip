"use server"
import { db } from "@/lib/firebase";
import { IPost } from "@/util/types";
import uuid from "@/util/uuid";
import {  collection, doc, getDoc, getDocs, orderBy, query, setDoc } from "firebase/firestore";

export async function getConfessions () {
    const confessions = await getDocs(query(collection(db, "confessions"), orderBy("date", "desc")));

    return confessions.docs;
};

export async function postConfession(formData: FormData) {

    const content = formData.get("confession");
    const id = uuid();
    const date = Date.now();

    const post: IPost = {
        content: content!.toString(),
        uuid: id,
        date: date,
    }

    try {
        await setDoc(doc(db, "confessions", id), post);
    } catch (e) {
        throw e;
    }
    
}

export async function getConfessionByUuid (id: string) {

    const document = await getDoc(doc(db, "confessions", id));

    if (!document.exists()) {
        return null;
    }

    const confession: IPost = {
        content: document.get("content"),
        uuid: id,
        date: document.get("date"),
    };

    return confession;
}