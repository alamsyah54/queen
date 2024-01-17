import type { Metadata } from "next"
import { Sarabun } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/shared/Navbar"

const sarabun = Sarabun({
    weight: "500",
    style: "normal",
    subsets: ["latin", "thai"],
})

export const metadata: Metadata = {
    title: {
        template: "Queen Of Nature | %s",
        default: "Queen Of Nature",
    },
    description:
        "เป็นแบรนด์เล็ก ๆ ที่เริ่มต้นจากความสนใจ เริ่มศึกษา จนนำมาสู่การทำผลิตภัณฑ์ต่าง ๆ เป็นงานอดิเรก และพัฒนาผลิตภัณฑ์ให้ดียิ่งขึ้น โดยจะใช้สารสกัดจากธรรมชาติ ไม่สังเคราะห์ ให้ความรู้สึก และสัมผัสจากธรรมชาติ",
    icons: {
        icon: [
            {
                url: "/icons/QueenCrown.webp",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icons/QueenCrownLight.webp",
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
    keywords:
        "Small Brand, Passion-Driven, Product Development, Hobby Turned Business, Natural Ingredients, Non-Synthetic, Handcrafted Products, Nature-inspired, Sustainable Practices, Artisanal Creations, Passion for Excellence, Ethical Production, Creative Journey, Small-scale Production, Natural Extracts, Organic Philosophy, Quality Craftsmanship, From Passion to Products, Holistic Approach, Eco-Friendly Creations",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className='!scroll-smooth'>
            <body
                className={`${sarabun.className} selection:bg-emerald-500 selection:text-white text-dark-800 dark:text-gray-300 duration-700`}
            >
                <main className='flex flex-col gap-7 p-7 w-screen h-screen '>
                    <Navbar />
                    <div className='overflow-auto backdrop-blur-sm dark:bg-dark-600/30 bg-gray-100/30 rounded-[20px] shadow-lg shadow-black/25 dark:shadow-black/70'>
                        {children}
                    </div>
                </main>
                <div className='w-full h-2 fixed bottom-0 bg-green-500 sm:bg-yellow-500 md:bg-orange-500 lg:bg-red-500' />
            </body>
        </html>
    )
}
