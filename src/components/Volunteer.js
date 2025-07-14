// src/components/Projects.js
export default function Projects() {
  const projects = [
    {
      title: "PROTECT (Preventing Risk of Online Trafficking & Exploitation of Children Together) Project ",
      image: "/projects/ecommerce.png",
      link: "/projects/ecommerce",
    },
    
  ]

  return (
    <section
      id="volunteer"
      className="min-h-screen w-full px-20 md:px-30 py-  text-black"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Volunteer</h2>
      </div>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Text */}
            <div className="text-left space-y-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <a
                href={project.link}
                className="inline-block px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                Learn More →
              </a>
            </div>

            {/* Right: Image */}
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
