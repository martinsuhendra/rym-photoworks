import Contacts from '@/features/Contacts'
import Hero from '@/features/Hero'
import Introduction from '@/features/Introduction'
import Photography from '@/features/Photography'
import Services from '@/features/Services'
import Videography from '@/features/Videography'

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Services />
      <Photography />
      <Videography />
      <Contacts />
    </main>
  )
}
