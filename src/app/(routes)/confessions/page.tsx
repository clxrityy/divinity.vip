import { getConfessions } from "@/app/_actions/confession";
import Item from "@/components/Item";
import Wrapper from "@/components/layout/Wrapper";
import Loading from "@/components/ui/Loading";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Suspense } from "react";

export default async function ConfessionsPage() {

    let confessions = await getConfessions();

    let confessionArray: QueryDocumentSnapshot<DocumentData, DocumentData>[] = [];

    confessions ? confessions.forEach((confession) => confessionArray.push(confession)) : confessionArray = [];


    return <main className="w-full h-full flex items-center justify-center flex-col">
        <h1 className="sr-only">
            confessions
        </h1>
        <div className="h-fit w-full flex justify-center mt-10 flex-col">
            <div className="flex flex-col text-center items-center gap-10 w-full h-fit">
                <Suspense fallback={<Loading size={250} />}>
                    <Wrapper postType="confession" />
                </Suspense>
            </div>
        </div>
        <div className="post-container-box bg-gradient-to-r from-slate-200 to-sky-100">
            <div className="post-container">
                {confessionArray.map((confession, idx) => (
                    <Item postType="confession" key={idx} data={confession} />
                ))}
            </div>
        </div>
    </main>
}