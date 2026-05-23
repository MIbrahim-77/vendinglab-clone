'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function IceCreamTelegramBannerSection() {
  return (
    <div
      className="w-full py-4 px-8"
      style={{
        backgroundColor: '#f5f3ef',
        borderTop: '1px solid #e0ddd8',
        borderBottom: '1px solid #e0ddd8',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left">
        <Image
          src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779386178/tg-6_tue9pi.webp"
          alt="Telegram Icon"
          width={70}
          height={70}
          className="object-contain w-12 h-12 md:w-auto md:h-auto"
        />

        <span className="text-gray-800 font-semibold text-base md:text-lg flex-1 ml-0 md:ml-2">
          Join our Telegram channel to be in the loop of our success
        </span>

        <Link
          href="https://t.me/vendinglab"
          target="_blank"
          className="bg-transparent border-2 border-yellow-600 text-gray-800 font-bold uppercase tracking-widest text-sm rounded-full px-6 md:px-8 py-3 hover:bg-yellow-50 transition whitespace-nowrap"
        >
          JOIN TELEGRAM
        </Link>
      </div>
    </div>
  )
}
