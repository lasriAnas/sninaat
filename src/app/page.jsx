import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Grid from "./components/Grid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="bg-orange-500 w-full h-[calc(100vh-4.1rem)]"></div>
      <Grid />
    </main>
  );
}
