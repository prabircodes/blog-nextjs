// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/Author"

const PopularpostSection = () => {
  return (
    <section className="container py-16 mx-auto md:px-20 ">
      <h2 className="py-12 text-4xl font-bold text-center">
        Most Popular Post
      </h2>
      <Swiper slidesPerView={2}>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default PopularpostSection

function Post() {
  return (
    <div className="grid px-4">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpg"} width={600} height={400} />
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-center py-4 info">
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
            <a className="text-xl font-bold text-gray-800 md:text-4xl hover:text-gray-600">
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
