import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/features/Header';
import { Footer } from '@/components/features/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Michael O\'Neal | ML Engineer',
  description: 'End-to-end ML platform for training vision-language models to automate computer use tasks. Mixture of Experts architecture with LoRA adapters, synthetic data generation, and production inference.',
  keywords: ['VLM', 'vision-language models', 'LoRA', 'Mixture of Experts', 'Qwen3-VL', 'computer use', 'digital labor', 'ML infrastructure'],
  authors: [{ name: 'Michael O\'Neal' }],
  openGraph: {
    title: 'Michael O\'Neal | ML Engineer',
    description: 'End-to-end ML platform: MoE architecture, LoRA fine-tuning, synthetic data generation, production inference.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
