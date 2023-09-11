import Image from 'next/image'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#282828]">
      <Navbar />
      <div class="container mt-24 sm:mt-48 lg:mt-60 px-12 py-4 mx-auto">
        <Hero />
      </div>
    </main>
  )
}
