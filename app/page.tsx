import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <Hero/>
      </div>
    </main>
  );
}
