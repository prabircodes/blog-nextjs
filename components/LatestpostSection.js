import Author from "./_child/Author"
import Link from "next/link"
import Image from "next/image"

const LatestpostSection = () => {
  return (
    <section className="container py-10 mx-auto md:px-20">
      <h2 className="py-12 text-4xl font-bold text-center">Latest Post</h2>

      {/* Grid column */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  )
}

export default LatestpostSection

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image
              className="rounded"
              src={"/images/img1.jpg"}
              width={500}
              height={350}
            />
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
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
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
