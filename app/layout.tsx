import './globals.css'
import type { Metadata } from 'next'
import { ReduxProvider } from '@/redux/provider'


export const metadata: Metadata = {
  title: 'Community dreamsfoundation',
  description: "",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <ReduxProvider>
                {children}
          </ReduxProvider>
      </body>
    </html>
  )
}
