import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'StudyFlow', description: 'A softer way to plan your semester.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
