import MetaHead from '../components/MetaHead';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <MetaHead 
        page="Home"
        description="The home page to find some basic information about Simon"
      />
      <Hero 
        description="Welcome to Simon's Portfolio"
      />
    </>
  )
}
