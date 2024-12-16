import {Nunito} from 'next/font/google';

import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Daniel Simms | Computer Science Student & Full Stack Developer',
    description: 'Portfolio of Daniel Simms, Computer Science student at University of Nottingham specializing in Full Stack Development, Java, C++, and AI. Experienced in web development and software engineering.',
    keywords: 'Daniel Simms, Computer Science, Full Stack Development, Java, C++, University of Nottingham, Software Engineer, Web Developer, Portfolio',
    openGraph: {
        title: 'Daniel Simms | Computer Science Student & Full Stack Developer',
        description: 'Portfolio of Daniel Simms, Computer Science student at University of Nottingham specializing in Full Stack Development, Java, C++, and AI.',
        type: 'website',
        url: 'https://danielsimms.dev',
        images: [
            {
                url: '/ProfilePic.png',
                width: 800,
                height: 600,
                alt: 'Daniel Simms Profile Picture',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Daniel Simms | Computer Science Student & Full Stack Developer',
        description: 'Portfolio of Daniel Simms, Computer Science student at University of Nottingham specializing in Full Stack Development, Java, C++, and AI.',
        images: ['/ProfilePic.png'],
    },
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
