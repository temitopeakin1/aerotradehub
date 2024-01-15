import { Footer, NavBar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "The Jet's Place",
  description: "Rent or Buy a Luxury Jet Today",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
