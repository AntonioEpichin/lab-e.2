import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";
import AuthButton from "@/components/ui/supabase/AuthButton"; 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <AuthButton />
          {children}
        </main>
      </body>
    </html>
  );
}
