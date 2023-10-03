import "./globals.css";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { Providers } from "./providers";
import "@contentful/live-preview/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
          <Providers draftModeEnabled={isEnabled}>{children}</Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
