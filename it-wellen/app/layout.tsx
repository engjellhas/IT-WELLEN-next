import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
import Head from "next/head";

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
      <Head>
<script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                window.$crisp=[];
                window.CRISP_WEBSITE_ID="a8d0a11a-4fad-49b8-b0af-03adf1d4b40b";
                (function(){
                  d=document;
                  s=d.createElement("script");
                  s.src="https://client.crisp.chat/l.js";
                  s.async=1;
                  d.getElementsByTagName("head")[0].appendChild(s);
                })();
              `,
            }}
          />
</Head>
      <body className={spaceGrotesk.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
