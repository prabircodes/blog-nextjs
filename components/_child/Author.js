import Image from "next/image"
import Link from "next/link"

const Author = () => {
  return (
    <div className="flex py-5 author">
      <Image src={"/images/author/author1.jpg"} className="rounded-full" height={60} width={60} />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}><a className="font-bold text-gray-800 text-md hover:text-gray-600">Prabir Singh</a></Link>
        <span className="text-sm text-gray-500">CEO, Founder</span>
      </div>

    </div>
  )
}

export default Author
