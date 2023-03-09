import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Grid from "./components/Grid";
import FirstFrame from "./components/FirstFrame";
import Info from "./components/Info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <FirstFrame />
      <Grid />
      <Info />
    </main>
  );
}
