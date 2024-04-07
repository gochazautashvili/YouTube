import Hero from "@components/Hero";
import { Suspense } from "react";

const Home = () => {
  return (
    <main className="mt-20 lg:ml-[250px] px-6 pt-4">
      <Suspense fallback="Loading...">
        <Hero />
      </Suspense>
    </main>
  );
};

export default Home;
