import { adminPath } from "@/util/adminLogin";
import { redirect } from "next/navigation";

type Props = {
    params: { id: string };
};

export default function AdminDashboardPage({ params }: Props) {
    
    if (params.id === adminPath(process.env.ADMIN_CREDENTIALS!)) {
        return (
            <div>
                <h1>Admin Dashboard</h1>
            </div>
        )
    } else {
        return redirect("/");
    }
}