export default function Experience() {
  const experiences = [
    {
      number: "01.",
      title: "Waitress",
      company: "PT. Sambal Bakar Indonesia",
      date: "2024 Dec - 2025 May ",
    },
    
  ]

  return (
    <section
      id="experience"
      className="min-h-screen w-full px-6 md:px-20 py-28  text-black"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-sm uppercase tracking-wide text-black-300 mb-2">
          Career so far
        </h3>
        <h2 className="text-4xl font-bold">Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex justify-between items-center border border-black-400 rounded-lg px-6 py-6"
          >
            {/* Left side */}
            <div className="flex items-center gap-6">
              {/* Number Box */}
              <div className="bg-gray-500 w-14 h-14 flex items-center justify-center rounded-sm text-white font-bold">
                {exp.number}
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-black-300">{exp.company}</p>
              </div>
            </div>

            {/* Right side */}
            <div className="text-right hidden sm:block">
              <div className="border-l border-black-400 h-full ml-6 pl-6 text-lg font-semibold">
                {exp.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
