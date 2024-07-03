import Image from 'next/image'

import { Container } from '@/components/Container'

import Eaton from '@/images/logos/Eaton.png'
import Techstars from '@/images/logos/Techstars.png'
import Exelon from '@/images/logos/Exelon.png'
import NIU from '@/images/logos/NIU.png'
import UofI from '@/images/logos/UofI.png'
import Berkely from '@/images/logos/Berkeley Lab.png'

const sponsors = [
  { name: 'Eaton', logo: Eaton },
  { name: 'Exelon', logo: Exelon },
  { name: 'Techstars', logo: Techstars },
  { name: 'U of I', logo: UofI },
  { name: 'Berkely', logo: Berkely },
  { name: 'NIU', logo: NIU },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Trusted By
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                unoptimized
                className="rounded-2xl grayscale"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
