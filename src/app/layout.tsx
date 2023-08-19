import "./globals.css"
import { Roboto } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"]
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Twitter UI</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
