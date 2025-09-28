import Image from 'next/image'

export default function Logo() {
  return (
    <div className="logo inline-flex items-center gap-2">
      <Image
        src={'/powernews-logo.svg'}
        width={140}
        height={42}
        alt="PowerNews Logo"
        className="w-auto h-10"
        priority
      />
    </div>
  )
}
