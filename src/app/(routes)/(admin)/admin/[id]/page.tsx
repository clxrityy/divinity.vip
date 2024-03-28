import { getAllPosts } from "@/app/_actions/post";
import AllPosts from "@/components/admin/AllPosts";
import { adminPath } from "@/util/adminLogin";
import { redirect } from "next/navigation";

type Props = {
    params: { id: string };
};

export default async function AdminDashboardPage({ params }: Props) {

    const posts = await getAllPosts();

    if (params.id === adminPath(process.env.ADMIN_CREDENTIALS!)) {
        return (
            <div className="flex h-full w-full items-center flex-col gap-5">
                <h1 className="sr-only">Admin Dashboard</h1>
                <h1 className="font-medium text-center flex flex-col items-center gap-2">
                    manage and remove inappropriate posts
                    <p className="text-xs md:text-sm font-light">
                        unauthorized access will be logged
                    </p>
                </h1>
                <div>
                    <AllPosts posts={posts} />
                </div>
            </div>
        )
    } else {
        return redirect("/");
    }
}