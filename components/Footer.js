import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import Link from "next/link"
import Newsletter from "./_child/Newsletter"

const Footer = () => {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  }
  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
      <div className="container flex justify-center py-12 mx-auto">
        <div className="py-5">
          <div className="flex justify-center gap-6">
            <Link href="#">
              <a>
                <FaFacebookF color="#888888" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <FaTwitter color="#888888" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <FaYoutube color="#888888" />
              </a>
            </Link>
          </div>
          <p className="py-5 text-sm text-gray-400">
            Copyright @ 2022 all rights reserved | made by prabirsingh{" "}
          </p>
          <p className="text-center text-gray-400">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
