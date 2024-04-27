import { GeistSans } from "geist/font/sans";
import "./globals.css";
import SearchBar from "@/components/ui/SearchBar";
import BannerCarousel from "@/components/ui/BannerCarrousel";
import Header from "@/components/ui/Header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col w-full">
          <SearchBar />
          <Header />
          <BannerCarousel
            images={[
              { src: '/images/banner/banner01.png' },
              { src: '/images/banner/banner02.png' },
              { src: '/images/banner/banner03.png' },
            ]}
          />

          {children}
        </main>
      </body>
    </html>
  );
}
