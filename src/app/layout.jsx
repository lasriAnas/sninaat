import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="antialiased bg-white font-sans text-gray-900">
        <main className="w-full">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
