"use server";
import { db } from "@/lib/firebase";
import { IPost } from "@/util/types";
import uuid from "@/util/uuid";
import { collection, doc, getDoc, getDocs, orderBy, query, setDoc } from "firebase/firestore";

export async function getAdvices() {
    const advices = await getDocs(query(collection(db, "advice"), orderBy("date", "desc")));

    return advices.docs;
}

export async function postAdvice(formData: FormData) {

    const content = formData.get("advice");
    const id = uuid();
    const date = Date.now();

    const post: IPost = {
        content: content!.toString(),
        uuid: id,
        date: date,
    };

    try {
        await setDoc(doc(db, "advice", id), post);
    } catch (e) {
        throw e;
    }
}

export async function getAdviceByUuid(id: string) {

    const document = await getDoc(doc(db, "advice", id));

    if (!document.exists()) {
        return null;
    }

    const advice: IPost = {
        content: document.get("content"),
        uuid: id,
        date: document.get("date"),
    };

    return advice;
}