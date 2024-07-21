'use client'
import React, { useState } from 'react'
import { NewProjectCard } from './NewProjectCard';
import { cn } from '../utils/cn';

const projectsData = [
    {
      id: 1,
      title: "Astra Chatbot Website",
      description: "Project 1 description",
      image: "/images/projects/astra.png",
      tag: ["Next", "Typescript", "MongoDB", "Gemini", "Clerk"],
      gitUrl: "https://github.com/ShaberManzoor/Astra",
      previewUrl: "https://astra-seven-mu.vercel.app/",
    },
    {
      id: 2,
      title: "Imaginify AI SaaS Platform",
      description: "Project 2 description",
      image: "/images/projects/imaginify.png",
      tag: ["Next", "Typescript", "MongoDB", "Cloudinary", "Clerk", "Stripe"],
      gitUrl: "https://github.com/ShaberManzoor/imaginify",
      previewUrl: "https://imaginify-red-chi.vercel.app/",
    },
    {
      id: 3,
      title: "Medicare- Hospital Web App",
      description: "Project 3 description",
      image: "/images/projects/medicare.png",
      tag: ["React", "Express", "Node", "MongoDB", "Stripe"],
      gitUrl: "https://github.com/ShaberManzoor/hospital_web_application",
      previewUrl: "https://github.com/ShaberManzoor/hospital_web_application",
    },
    {
      id: 4,
      title: "Indiegram Social Media App",
      description: "Project 4 description",
      image: "/images/projects/indiegram.png",
      tag: ["React", "Node", "MongoDB", "TypeScript", "Appwrite"],
      gitUrl: "https://github.com/ShaberManzoor/indiegram",
      previewUrl: "https://indiegram.vercel.app/",
    },
    // {
    //   id: 5,
    //   title: "React Firebase Template",
    //   description: "Authentication and CRUD operations",
    //   image: "/images/projects/5.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
    // {
    //   id: 6,
    //   title: "Full-stack Roadmap",
    //   description: "Project 5 description",
    //   image: "/images/projects/6.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
];

export default function ProjectSection() {
  const [tag, setTag] = useState('All');
  const handleTagChange = (newTag: string) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )
  return (
    <section id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-5">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}  
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}  
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}  
          />
        </div> */}
        <div className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
      )}>
            {/* {filteredProjects.map((project) => <ProjectCard key={project.id} id={project.id} title={project.title} imgUrl={project.image} description={project.description} />)} */}
            {projectsData.map((project) => <NewProjectCard key={project.id} project={project}/>)}
        </div>
    </section>
  )
}
