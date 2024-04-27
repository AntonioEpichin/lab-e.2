import { GeistSans } from "geist/font/sans";
import "./globals.css";
import SearchBar from "@/components/ui/SearchBar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center w-full">
          <SearchBar />
          {children}
        </main>
      </body>
    </html>
  );
}
