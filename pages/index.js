import CategorySection from "../components/CategorySection"
import HeroSection from "../components/HeroSection"
import LatestpostSection from "../components/LatestpostSection"
import Layout from "../components/Layout"
import PopularpostSection from "../components/PopularpostSection"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <LatestpostSection />
      <PopularpostSection />
      <CategorySection />
    </Layout>
  )
}
