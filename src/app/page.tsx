import Card, { CardProps } from '@/components/Card'
import CardList from '@/components/CardList'
import Image from 'next/image'

export default function Home() {

  const drinks: CardProps[] = [
    {
      name: "Margarita",
      url: "/drinks/margarita",
    },
    {
      name: "Margarita",
      url: "/drinks/margarita",
    },
    {
      name: "Margarita",
      url: "/drinks/margarita",
    },
    {
      name: "Margarita",
      url: "/drinks/margarita",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="content-placeholder">
        <h1 className="text-3xl font-bold">{"Popular Drinks"}</h1>
        <div className="cards-container mt-4 w-[90vw] md:w-[45vw]">
          <CardList cards={drinks} />
        </div>
      </div>
    </main>
  )
}
