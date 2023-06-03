import {Nunito} from 'next/font/google';

import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Portfolio',
    description: 'Daniel Simms Portfolio'
}

const font = Nunito({subsets: ["latin"]});

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    )
}
