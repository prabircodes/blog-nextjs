import Image from "next/image"
import Link from "next/link"
import Author from "./_child/Author"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import SwiperCore, { Autoplay } from "swiper"

const HeroSection = () => {
  SwiperCore.use([Autoplay])
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  }
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="pb-12 text-4xl font-bold text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  )
}

export default HeroSection

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpg"} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-center info">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-800 hover:text-orange-600">
              Business, Travel
            </a>
          </Link>

          <Link href={"/"}>
            <a className="text-gray-600 hover:text-gray-800">July 23, 2022</a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-2xl font-bold text-gray-800 md:text-4xl lg:text-6xl hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className="py-3 text-gray-500">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <Author />
      </div>
    </div>
  )
}
