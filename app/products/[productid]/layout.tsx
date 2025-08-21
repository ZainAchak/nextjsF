import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <body>
                {children}<br /><br />
                <h1 className="bg-amber-300">Product Layout Feature</h1>
            </body>
        </html>
    );  
}