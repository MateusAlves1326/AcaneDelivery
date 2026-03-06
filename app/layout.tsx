import type { Metadata } from 'next'
import { Inter, Geist_Mono, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _cinzel = Cinzel({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Arcane Delivery - Roguelike de Entregas Mágicas',
  description: 'Arcane Delivery é um roguelike de ação em visão top-down onde você assume o papel de um entregador em um mundo pós-apocalíptico.',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
