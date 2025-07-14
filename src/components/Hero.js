// src/components/Hero.js
export default function Hero() {
  return (
    <section className="min-h-screen flex items-start px-6 md:px-20 pt-35">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest text-gray-700 mb-2">
          Hello, I'm Mutiara
        </h2>
        <h1 className="text-6xl font-bold text-black leading-tight">
          Fullstack <br /> Developer
        </h1>
        <p className="text-gray-700 max-w-xl mt-4 text-base">
Versatile Fullstack & Mobile Developer passionate about creating seamless digital experiences across both mobile and web platforms. 

        </p>
        <a
          href="/cv.pdf"
          download
          className="mt-6 inline-block px-6 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
