'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function RoboticCafeTelegramSection() {
  return (
    <div
      className="w-full py-4 px-8"
      style={{
        backgroundColor: '#f5f3ef',
        borderTop: '1px solid #e0ddd8',
        borderBottom: '1px solid #e0ddd8',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
        <Image
          src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779386178/tg-6_tue9pi.webp"
          alt="Telegram Icon"
          width={70}
          height={70}
          className="object-contain w-12 lg:w-[70px] h-12 lg:h-[70px]"
        />

        <span className="text-gray-800 font-semibold text-sm sm:text-base lg:text-lg flex-1 text-center lg:text-left">
          Join Our Telegram Channel To Be In The Loop Of Our Success
        </span>

        <Link
          href="https://t.me/vendinglab"
          target="_blank"
          className="bg-transparent border-2 border-yellow-600 text-gray-800 font-bold uppercase tracking-widest text-sm rounded-full px-6 lg:px-8 py-2 lg:py-3 hover:bg-yellow-50 transition whitespace-nowrap w-full lg:w-auto text-center"
        >
          JOIN TELEGRAM
        </Link>
      </div>
    </div>
  )
}
