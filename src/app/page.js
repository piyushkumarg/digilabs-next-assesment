import CalltoAction from "@/components/calltoAction/CalltoAction";
import Details from "@/components/details/Details";
import Feature from "@/components/feature/Feature";
import Hero from "@/components/hero/Hero";
import LogoCloud from "@/components/logoCloud/LogoCloud";
import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <Feature />
      <Details />
      <Testimonial />
      <CalltoAction />
    </main>
  );
}
