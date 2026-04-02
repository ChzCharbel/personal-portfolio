import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Charbel Chávez Portfolio",
  description: "CS student focused on research in quantum computing, machine learning, and data science.",
  icons: {
    icon: "/C.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${playfair.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
