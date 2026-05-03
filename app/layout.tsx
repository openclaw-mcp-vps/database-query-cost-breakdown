import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QueryCost — Database Query Cost Breakdown',
  description: 'Analyze slow query logs and get detailed cost breakdowns with optimization suggestions for table scans, joins, and indexes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c3ec3c0c-0255-4f89-80e1-c3c4850ea92f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
