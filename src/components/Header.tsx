import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'
import Image from 'next/image'

import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Image
            src={stevenMchailImage}
            alt={'Transfer Thought'}
            unoptimized
            className="h-12 grayscale"
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
