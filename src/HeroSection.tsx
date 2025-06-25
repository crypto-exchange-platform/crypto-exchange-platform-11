import  { FC } from 'react';

export const HeroSection: FC = () => (
  <section
    id="home"
    className="relative flex items-center justify-center h-screen bg-transparent text-white"
  >
    <div className=" inset-0 bg-black bg-opacity-50" />

    <div className="relative z-10 text-center px-6 md:px-0 max-w-2xl">
      <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
        Welcome to CryptCrest
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300">
        Ride the Peak of Blockchain — track, learn & trade with confidence.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#markets"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-bold uppercase px-6 py-3 rounded-full transition"
        >
          Get Started
        </a>
        <a
          href="#learn"
          className="inline-block border-2 border-white hover:border-cyan-400 text-white hover:text-cyan-400 font-semibold uppercase px-6 py-3 rounded-full transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>
);
 