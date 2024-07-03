import Image from 'next/image'

import { Container } from '@/components/Container'
import TransferThought from '../images/logos/Transfer Thought.png'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Image
          src={TransferThought}
          alt={'Transfer Thought'}
          unoptimized
          className="w-48"
        />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Transfer Thought. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
