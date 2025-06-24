import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiDotnet,
  DiMsqlServer,
} from "react-icons/di"
import Reveal from "./Reveal"
import { SiBlazor, SiElasticsearch, SiTailwindcss, SiYaml } from "react-icons/si"
import { TbBrandAzure, TbBrandCSharp, TbSql } from "react-icons/tb"
import { VscAzureDevops } from "react-icons/vsc"
import { TiGlobe } from "react-icons/ti"
import { CiGlobe } from "react-icons/ci"
import { LuBox } from "react-icons/lu"

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'Tailwind', icon: <SiTailwindcss className='text-pink-600' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'Blazor', icon: <SiBlazor className='text-blue-500' /> },
      ],
    },
    {
      category: 'Fullstack',
      technologies: [
        { name: 'C Sharp', icon: <TbBrandCSharp className='text-purple-800' /> },
        { name: 'Dot Net', icon: <DiDotnet className='text-blue-500' /> },
        { name: 'SQL', icon: <TbSql className='text-yellow-400' /> },
        { name: 'ASP.NET', icon: <CiGlobe className='text-blue-500' /> },
        { name: 'Elastic Search', icon: <SiElasticsearch className='text-blue-500' /> },
      ],
    },
    {
      category: 'Cloud',
      technologies: [
        { name: 'Azure', icon: <TbBrandAzure className='text-blue-500' /> },
        { name: 'YAML', icon: <SiYaml className='text-green-600' /> },
        { name: 'DevOps', icon: <VscAzureDevops className='text-blue-500' /> },
        { name: 'ARM Template', icon: <LuBox className='text-blue-300' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <>
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="about">
      <div className="grid md:grid-cols-1 place-items-center"> <div>
      <Reveal/>
            <div className="text-gray-300 my-3">
                <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                <p className="text-justify leading-7 w-11/12 mx-auto">
                I'm 12 years experienced fullstack developer in development, system design and deployment of technologies like .Net, Azure, relational and non-relational databases 
                in an agile and waterfall software development lifecycles.
                </p>
            </div>

            <div className="flex text-center justify-center mt-10 items-center gap-7">
                <div className="bg-gray-800/40 p-5 rounded-lg">
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">12
                        <span></span>
                    </h3>
                    <p className="text-xs md:text-base"><span>years of experience</span></p>
                </div>

                <div className="bg-gray-800/40 p-4 rounded-lg">
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">20
                        <span>+</span>
                    </h3>
                    <p className="text-xs md:text-base"><span>Projects</span></p>
                </div>
            </div>
        </div>
      </div>
      </div>
    <div className="max-w-[910px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I worked on various projects with following skills.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
    </>
  )
}

export default Skills
