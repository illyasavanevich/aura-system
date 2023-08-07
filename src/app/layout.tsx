import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { ThemeProvider } from "../theme";
import StyledComponentsRegistry from "../theme/registry";
import Footer from "../components/Footer";
import Header from "../components/Header";

const dMSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dMSans.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}