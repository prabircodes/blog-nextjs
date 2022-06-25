import Image from "next/image"
import Link from "next/link"
import Author from "./_child/Author"
const CategorySection = () => {
  return (
    <section className="container py-16 mx-auto md:px-20">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h2 className="py-12 text-4xl font-bold text-center">Business</h2>
          <div className="flex flex-col gap-6">
            {/* Posts */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h2 className="py-12 text-4xl font-bold text-center">Travel</h2>
          <div className="flex flex-col gap-6">
            {/* Posts */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategorySection

function Post() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col justify-start image">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/img1.jpg"}
              className="rounded"
              width={300}
              height={250}
            />
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
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  )
}
