import Image from "next/image";
import { Inter } from "next/font/google";
import LineChart from "./app";
import DemoPie from "./pie";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <LineChart/>
      <DemoPie/>
    </main>
  );
}
