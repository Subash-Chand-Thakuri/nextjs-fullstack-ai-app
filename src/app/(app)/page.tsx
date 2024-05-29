"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import messages from "@/messages.json"
import Autoplay from "embla-carousel-autoplay"


export default function Home() {
  // const onConnect = async() => {
  //   const res = await axios.post("/api")
  //   console.log("It's from the pageTsx")
  // }

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12">
      <section className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold my-6">“Code like it’s poetry, debug like it’s therapy.”</h1>
        <p className="mt-3 md:mt-4 text-base md:text-lg">
          “In code we trust.” “Debugging is like detective work; it’s all about
          finding the clues.” “Coding: Where the impossible becomes possible,
          one line at a time.”
        </p>
      </section>
      <Carousel className="w-full max-w-xs" 
      plugins={[Autoplay({delay: 2000})]}
      >
      <CarouselContent>
        {
          messages.map((message,index)=> (
            <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardHeader className="text-center">
                  {message.title}
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6 mx-auto">
                  <span className="text-l font-semibold">{message.content}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </main>
  );
}
