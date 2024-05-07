import type { Metadata } from "next";
import {DM_Sans} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import { ThemeProvider } from "next-themes";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plura",
  description: "All in on Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en"
     suppressHydrationWarning
     >
      <body className={inter.className}>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
        <ModalProvider>
          {children}
          <Toaster/>
        </ModalProvider>
      </ThemeProvider>
      </body>
      </html>         
  );
}
