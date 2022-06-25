import Layout from "../../components/Layout"
import Author from "../../components/_child/Author"
import Image from "next/image"
import Related from "../../components/_child/Related"

export default function Page() {
  return (
    <Layout>
      <section className="container w-1/2 py-16 mx-auto md:px-2">
        <div className="flex justify-center">
          <Author />
        </div>

        <div className="py-10 post">
          <h1 className="pb-5 text-4xl font-bold text-center">
            Your most unhappy cutomers are your greatest source of learning
          </h1>
          <p className="text-xl text-center text-gray-500">
            Far far away, behind the word mountains, far from the countries
            vakalia and Consonatia, there live the blind texts.
          </p>
          <div className="py-10">
            <Image src={"/images/img1.jpg"} width={900} height={600} />
          </div>
          <div className="flex flex-col gap-4 text-lg text-gray-600 content">
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
          <Related />
      </section>
    </Layout>
  )
}
