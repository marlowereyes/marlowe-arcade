import { Pixelify_Sans, Schibsted_Grotesk } from "next/font/google";
import "../styles/globals.css";

const pixelfySans = Pixelify_Sans({
  variable: "--font-pixelfy-sans",
  subsets: ["latin"],
  weight: ["400"] 
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700"] 
});

export const metadata = {
  title: "Marlowe Arcade",
  description: "Digital Arcade to complete a crossword about Marlowe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body
        className={`${pixelfySans.variable} ${schibstedGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
