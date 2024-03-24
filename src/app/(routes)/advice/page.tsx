import { getAdvices } from "@/app/_actions/advice";
import Item from "@/components/Item";
import Wrapper from "@/components/layout/Wrapper";
import Loading from "@/components/ui/Loading";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Suspense } from "react";

export default async function AdvicePage() {

    let advices = await getAdvices();

    let advicesArray: QueryDocumentSnapshot<DocumentData, DocumentData>[] = [];

    advices ? advices.forEach((advice) => advicesArray.push(advice)) : advicesArray = [];

    return <main className="w-full h-full flex items-center justify-center flex-col">
        <h1 className="sr-only">
            advice
        </h1>

        <div className="h-full w-full flex justify-center mt-10 flex-col">
            <div className="flex flex-col text-center items-center gap-10 w-full">
                <Suspense fallback={<Loading size={250} />}>
                    <Wrapper  postType="advice" />
                </Suspense>
            </div>
        </div>

        <div className="w-full xl:w-4/5 2xl:w-3/4 flex items-center justify-center h-full bg-gradient-to-l from-slate-400/10 to-sky-300/10 py-10 mx-auto rounded-md shadow-lg">
            <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 w-2/3 2xl:w-3/4 items-center gap-5">
                {advices.map((advice, idx) => (
                    <Item postType="advice" key={idx} data={advice} />
                ))}
            </div>
        </div>
    </main>;
}