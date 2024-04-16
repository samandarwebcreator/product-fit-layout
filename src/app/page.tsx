import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OpenGift from "@/components/OpenGift";
import OrderProject from "@/components/OrderProject";
import ProductBenefit from "@/components/ProductBenefit";
import WorkHours from "@/components/WorkHours";

export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        {" "}
        <OpenGift />{" "}
      </section>
      <section>
        <OrderProject />
      </section>
      <section>
        <ProductBenefit />
      </section>
      <section>
        <WorkHours />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
