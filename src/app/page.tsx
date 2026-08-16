import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Highlights } from "@/components/site/highlights";
import { Villa } from "@/components/site/villa";
import { Amenities } from "@/components/site/amenities";
import { Gallery } from "@/components/site/gallery";
import { Location } from "@/components/site/location";
import { Reviews } from "@/components/site/reviews";
import { Booking } from "@/components/site/booking";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Highlights />
        <Villa />
        <Amenities />
        <Gallery />
        <Location />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
