"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const queryclient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus: false
    }
  }
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dictionary",
  description: "Dictionary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryclient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
