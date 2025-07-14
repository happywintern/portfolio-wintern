// src/components/Projects.js
export default function Projects() {
  const projects = [
    {
      title: "Mobile App Fish Forum Discussion",
      image: "/projects/fishomie.jpg",
      link: "/projects/ecommerce",
    },
    {
      title: "POS System",
      image: "/projects/pos.jpg",
      link: "/projects/dashboard",
    },
    {
      title: "Book E-commerce",
      image: "/projects/bookstore.png",
      link: "/projects/other",
    },
    {
      title: "UI/UX Design Booking App",
      image: "/projects/other.png",
      link: "/projects/other",
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen w-full px-20 md:px-30 py-  text-black"
    >
      <div className="text-center mb-16">
        <h3 className="text-sm uppercase tracking-wide text-black-300 mb-2">Best work</h3>
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Text */}
            <div className="text-right space-y-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <a
                href={project.link}
                className="inline-block px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                Learn More →
              </a>
            </div>

            {/* Right: Image */}
            <div className="flex justify-start items-start">
              <img
                src={project.image}
                alt={project.title}
                className="w-[400px] md:w-[450px] rounded-xl shadow-xl object-cover"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
