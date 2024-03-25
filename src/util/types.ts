import { DocumentData } from "firebase/firestore";


export interface IPost extends DocumentData {
    content: string;
    uuid: string;
    date: Date | number;
}

export interface IStory extends IPost {
    title: string;
}