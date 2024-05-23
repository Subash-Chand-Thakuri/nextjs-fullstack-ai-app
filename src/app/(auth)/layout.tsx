export const metadata = {
  title: 'Full Stack Next App',
  description: 'Based on full-fledge fullstack app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
