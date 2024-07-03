'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

import Fire from '@/images/Fire.png'
import Forklift from '@/images/Forklift.png'
import LOTO from '@/images/LOTO.jpg'
import Loader from '@/images/Loader.png'
import Link from 'next/link'

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

const examples = [
  {
    name: 'Fire Safety',
    role: 'UX Design at InGen',
    image: Fire,
    link: 'https://scenario.transferthought.com/take/b88151e2-98af-44dd-966e-71602bb4be8f',
  },
  {
    name: 'Fork Lift',
    role: 'Design Engineer at Weyland-Yutani',
    image: Forklift,
    link: 'https://scenario.transferthought.com/take/49e31bc0-502c-40ba-aeee-328d55e5c938',
  },
  {
    name: 'Loader',
    role: 'Product Lead at Cyberdyne Systems',
    image: Loader,
    link: 'https://scenario.transferthought.com/take/5401dbe4-e075-4a38-8b6c-763662766ff2',
  },
  {
    name: 'LOCKOUT TAGOUT',
    role: 'General Manager at Initech',
    image: LOTO,
    link: 'https://scenario.transferthought.com/take/2fa4dc2c-e555-4db1-9a35-87bc510cd169',
  },
]

export function Examples() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-cyan-600 sm:text-5xl"
          >
            Examples
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-cyan-900"></p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3">
          {examples.map((example, exampleIndex) => (
            <Link href={example.link} key={exampleIndex}>
              <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                <div
                  className={clsx(
                    'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                    ['border-cyan-300', 'border-indigo-300', 'border-sky-300'][
                      exampleIndex % 3
                    ],
                  )}
                />
                <div
                  className="absolute inset-0 bg-indigo-50"
                  style={{ clipPath: `url(#${id}-${exampleIndex % 3})` }}
                >
                  <Image
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    src={example.image}
                    alt=""
                    priority
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                {example.name}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
