import './globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShopNext - Modern E-commerce Store',
  description: 'A modern e-commerce store built with Next.js, TypeScript, and Tailwind CSS',
  keywords: 'ecommerce, online store, shopping, nextjs, react',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}
