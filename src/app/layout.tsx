import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

export const metadata: Metadata = {
  title: "BW's Portfolio",
  description: "A simple portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        <body className="font-catamaran">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
  );
}
