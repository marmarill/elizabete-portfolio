import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { CV } from '@/components/CV/CV';

export default function Home() {
  return (
    <>
      <Header />
      <main>
          <CV />
        <Footer />
      </main>
    </>
  )
}
