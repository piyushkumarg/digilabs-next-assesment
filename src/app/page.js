import Announcement from '@/components/announcement/Announcement'
import CalltoAction from '@/components/calltoAction/CalltoAction'
import Details from '@/components/details/Details'
import Feature from '@/components/feature/Feature'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import LogoCloud from '@/components/logoCloud/LogoCloud'
import Navbar from '@/components/navbar/Navbar'
import Testimonial from '@/components/testimonial/Testimonial'


export default function Home() {
  return (
    <main className="">
      <Announcement/>
      <Navbar/>
      <Hero/>
      <LogoCloud/>
      <Feature/>
      <Details/>
      <Testimonial/>
      <CalltoAction/>
      <Footer/>
    </main>
  )
}
