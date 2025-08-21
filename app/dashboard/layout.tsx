export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <h1>Dashboard Layout Header</h1><br /><br />
                {children}<br /><br />
                <h1>Dashboard Layout Footer</h1>
            </body>
        </html>
    )
}