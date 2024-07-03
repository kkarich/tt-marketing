import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-cyan-600 sm:text-7xl">
            No-Code WebXR
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-cyan-900">
            <p>
              If you can make a PowerPoint, you can create Virtual Reality with
              Transfer Thought.
            </p>
            <p>
              Transfer Thought is an open source platform that allows anyone to
              easily create and deploy Virtual Reality experiences that run
              directly in the browser!
            </p>
          </div>
          <Button
            href="https://github.com/transferthought/transfer-thought"
            className="mt-10 w-full sm:hidden"
          >
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  )
}
