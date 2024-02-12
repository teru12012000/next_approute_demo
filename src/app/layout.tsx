import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClinentLayout from "../layout/ClientLayout"
import PopupLayout from "@/layout/popupLayout"
import PopupProvider from "@/store/popup/popupContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Next.js app router demo colection",
    description: "This app is Next.js demo app.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <PopupProvider>
                    <PopupLayout />
                    <ClinentLayout>{children}</ClinentLayout>
                </PopupProvider>
            </body>
        </html>
    )
}
