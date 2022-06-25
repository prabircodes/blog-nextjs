import Link from "next/link"
import Image from "next/image"
import Author from "./Author"
const Related = () => {
  return (
    <section className="pt-20">
      <h2 className="py-10 text-3xl font-bold text-center">Related</h2>
      <div className="flex flex-col gap-10">
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

export default Related

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
              height={200}
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
