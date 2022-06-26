import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'

export default function LatestpostSection() {

    const { data, isLoading, isError } = fetcher('api/posts')
    
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error</div>

  return (
    <section className="container py-10 mx-auto md:px-20">
        <h1 className="py-12 text-4xl font-bold text-center">Latest Posts</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
                data.map((value, index) => (
                    <Post data={value} key={index}></Post>
                ))
            }
        </div>
    </section>
  )
}


function Post( { data } ){
    const { id, title, category, img, published, author } = data;
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"}><a><Image src={img || "/"} className="rounded" width={500} height={350} /></a></Link>
            </div>
            <div className="flex flex-col justify-center py-4 info">
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</a></Link>
                </div>
                <p className="py-3 text-gray-500">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                { author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}
  