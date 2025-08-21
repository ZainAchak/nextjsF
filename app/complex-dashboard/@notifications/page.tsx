import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
    return <Card><div>
            Notifications
            <Link href={"/complex-dashboard/archived"} className="text-blue-500 text-md ml-10">Archived</Link>
        </div></Card>
}