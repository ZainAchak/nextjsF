import Card from "@/components/card";
import Link from "next/link";

export default function NotificationsArchived() {
    return <Card><div>
            Notifications
            <Link href={"/complex-dashboard"} className="text-blue-500 text-md ml-10">Default</Link>
        </div></Card>
}