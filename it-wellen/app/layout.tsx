import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "IT WELLEN",
  description: "CREATIVE AGENCY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
