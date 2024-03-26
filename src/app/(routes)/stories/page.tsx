import { getStories } from "@/app/_actions/stories";
import Item from "@/components/Item";
import Wrapper from "@/components/layout/Wrapper";
import Loading from "@/components/ui/Loading";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Suspense } from "react";

export default async function StoriesPage() {

    let stories = await getStories();

    let storiesArray: QueryDocumentSnapshot<DocumentData, DocumentData>[] = [];

    stories ? stories.forEach((story) => storiesArray.push(story)) : storiesArray = [];

    return <main className="w-full h-full flex items-center justify-between flex-col gap-12">
        <h1 className="sr-only">
            stories
        </h1>
        <div className="h-full w-full flex justify-center mt-10 flex-col">
            <div className="flex flex-col text-center items-center gap-10 w-full">
                <Suspense fallback={<Loading size={250} />}>
                    <Wrapper postType="story" />
                </Suspense>
            </div>
        </div>

        <div className="bg-gradient-to-r from-green-200/5 to-green-100/25 post-container-box">
            <div className="post-container">
                {storiesArray.map((story, idx) => (
                    <Item key={idx} postType="story" data={story} />
                ))}
            </div>
        </div>
    </main>;
}