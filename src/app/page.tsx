import Card from '@/components/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="content-placeholder">
        <h1 className="text-3xl font-bold">{"Popular Drinks"}</h1>
        <div className="cards-container mt-4 w-[90vw] md:w-[45vw]">
          <Card name="Margarita" url="/drinks/margarita" />
          <Card name="Margarita" url="/drinks/margarita" />
          <Card name="Margarita" url="/drinks/margarita" />
          <Card name="Margarita" url="/drinks/margarita" />
        </div>
      </div>
    </main>
  )
}
