import Nav from "@/components/header/Nav";
import TopHeader from "@/components/header/TopHeader";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "ChiroHealth - Your Path to Optimal Health",
  description:
    "Welcome to ChiroHealth: Your Path to Optimal Health. At ChiroHealth, we believe in the power of chiropractic care to transform lives. Our mission is to provide comprehensive, personalized care that addresses your unique health needs, helping you achieve a life free from pain and full of vitality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className + " overflow-x-hidden"}>
        <TopHeader />
        <Nav />
        {children}
      </body>
    </html>
  );
}
