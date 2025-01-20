import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
