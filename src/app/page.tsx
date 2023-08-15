import Header from '@/components/Header';
import Slider from '@/components/Homepage/Slider';
import About from '@/components/Homepage/About';
import Products from '@/components/Homepage/Products';
import Map from '@/components/Homepage/Map';
import ContactForm from '@/components/Homepage/ContactForm';

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <About />
      <Products />
      <Map />
      <ContactForm />
    </main>
  )
}
