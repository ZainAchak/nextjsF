import './globals.css';
export default function Layout({ children }: { children: React.ReactNode }) {   
    return (
        <html>
            <body className='bg-gray-700'>
                <h1 className='bg-gradient-to-r from-indigo-600 to-indigo-300 h-30 flex justify-center items-center text-white text-3xl font-bold'>Header</h1><br /><br />
                {children}<br /><br />
                <h1 className='bg-gradient-to-r from-indigo-600 to-indigo-400 h-20 flex justify-center items-center text-white text-3xl font-bold'>Main Layout Footer</h1>
            </body>
        </html>
    )
}