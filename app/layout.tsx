import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://contexto-familiar-canada-deiby.deibymontoya.chatgpt.site'),
  title: 'Contexto personal y migratorio de nuestra familia en Canadá',
  description: 'Historia, situación actual, prioridades y documentos para una futura evaluación migratoria familiar.',
  openGraph: {
    title: 'Contexto personal y migratorio de nuestra familia',
    description: 'Canadá · Información organizada para una futura evaluación',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Contexto personal y migratorio de nuestra familia' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contexto personal y migratorio de nuestra familia',
    description: 'Canadá · Información organizada para una futura evaluación',
    images: ['/og.png'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
