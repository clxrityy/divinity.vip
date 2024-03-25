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

    return <main className="w-full h-full flex items-center justify-center flex-col">
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

        <div className="w-full xl:w-4/5 2xl:w-3/4 flex items-center justify-center h-full bg-gradient-to-r from-green-200/5 to-green-100/25 py-10 mx-auto rounded-md shadow-md">
            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-1/2 xl:w-2/3 items-center gap-5">
                {storiesArray.map((story, idx) => (
                    <Item key={idx} postType="story" data={story} />
                ))}
            </div>
        </div>
    </main>;
}