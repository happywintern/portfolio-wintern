"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const skills = [
  { name: 'Laravel', logo: '/icons/laravel.png', slug: 'laravel' },
  { name: 'Vue', logo: '/icons/vue.png', slug: 'vue' },
  { name: 'Tailwind', logo: '/icons/tailwind.png', slug: 'tailwind' },
  { name: 'Next.js', logo: '/icons/nextjs.png', slug: 'nextjs' },
  { name: 'JavaScript', logo: '/icons/js.png', slug: 'javascript' },
  { name: 'Java', logo: '/icons/java.png', slug: 'java' },
]

export default function About() {
  const router = useRouter()
  const [hovered, setHovered] = useState(null)

  return (
    <section id="about" className="min-h-screen px-6 md:px-30 pt-28 text-left">
      <h2 className="text-4xl font-bold mb-4">
        about <span className="inline-block w-2 h-2 bg-black rounded-full ml-2"></span>
      </h2>
      <div className="h-1 w-40 bg-black mb-6"></div>
      <p className="text-gray-700 max-w-3xl mb-10">
        I&apos;m a Software Engineering student at IPB University, currently in my third year, with a strong interest in both web and mobile development. I specialize in building responsive web applications using Vue.js, Laravel, and Tailwind CSS, as well as mobile apps using Java in Android Studio.

Over the past few years, I’ve worked on various projects — from e-commerce websites and admin dashboards to educational and volunteer-based apps. I'm passionate about crafting user-focused solutions that are both functional and visually intuitive.

As a developer, I enjoy bringing ideas to life with clean code, scalable architecture, and purposeful design — whether it’s for the browser or a mobile screen.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="relative group cursor-pointer"
            onClick={() => router.push(`/projects/${skill.slug}`)}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
              <img src={skill.logo} alt={skill.name} className="w-12 h-12 mx-auto" />
            </div>
            {hovered === idx && (
              <div className="absolute text-xs mt-2 text-center w-full left-1/2 -translate-x-1/2 text-gray-600">
                See Projects Related
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
