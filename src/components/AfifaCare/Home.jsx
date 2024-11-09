import Hero from './HeroAfifa'
import Services from './Services'

const Home = () => {
  

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Featured Services */}
      <Services />

    </div>
  )
}

export default Home