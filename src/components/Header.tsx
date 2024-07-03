import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'

import TransferThought from '../images/logos/Transfer Thought.png'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Image
            src={TransferThought}
            alt={'Transfer Thought'}
            unoptimized
            className="w-48"
          />
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://github.com/transferthought/transfer-thought">
            Get Started
          </Button>
        </div>
      </Container>
    </header>
  )
}
