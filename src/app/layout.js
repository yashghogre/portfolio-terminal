import { Inter } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: "Yash Ghogre - Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
