import Image from "next/image";
import Hero from "./Hero";

export const metadata = {
  title: "Home",
  description: "Welcome",
};
export default function Home() {
  return (
    <>
      <Hero/>
    </>
  );
}
