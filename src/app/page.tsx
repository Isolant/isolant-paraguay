import Header from '@/components/Header';
import Slider from '@/components/Homepage/Slider';
import About from '@/components/Homepage/About';
import Products from '@/components/Homepage/Products';

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <About />
      <Products />
    </main>
  )
}
