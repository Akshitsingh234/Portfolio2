import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
    </div>
  );
};

export default Home;