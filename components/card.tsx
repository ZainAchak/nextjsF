import React from "react";
import "./styles.css"
export default function Card({children}: {children: React.ReactNode}) {
    return <div className="h-90 w-90 bg-amber-400 flex justify-center items-center text-white text-2xl m-10">
        {children}
    </div>
}