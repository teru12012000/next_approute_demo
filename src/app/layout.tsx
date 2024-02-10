import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClinentLayout from "../layout/ClientLayout"
import PopupLayout from "@/layout/popupLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Next.js app router demo colection",
    description: "",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <ClinentLayout>{children}</ClinentLayout>
            </body>
        </html>
    )
}
