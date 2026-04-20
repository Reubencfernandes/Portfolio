import type { Metadata } from "next";
import { Kanit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reuben Chagas Fernandes | Full Stack Developer from Goa",
  description: "Reuben Chagas Fernandes is a full stack developer from Goa, India, specializing in web development and software engineering.",
  keywords: ["Reuben Chagas Fernandes", "Reuben Fernandes", "Reuben Chagas", "Full Stack Developer", "Web Developer", "Goa", "India", "Software Engineering"],
  authors: [{ name: "Reuben Chagas Fernandes" }],
  creator: "Reuben Chagas Fernandes",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Reuben Chagas Fernandes | Full Stack Developer",
    description: "Reuben Chagas Fernandes is a full stack developer from Goa, India, specializing in web development and software engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reuben Chagas Fernandes | Full Stack Developer",
    description: "Reuben Chagas Fernandes is a full stack developer from Goa, India",
    images: ["https://portfolio-production-70ab.up.railway.app/reuben.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
