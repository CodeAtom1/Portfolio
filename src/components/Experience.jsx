import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'SHL',
        period: 'Oct 2022 - Present',
        description: 'Leading a team of .Net developers and implementation of an integration appliction.',
      },
      {
        company: 'Accenture',
        period: 'June 2019 - Oct 2022',
        description: 'Managing developers team and implementation and deployment of microservices with .NET CORE and Azure pipelines for a client.',
      },
      {
        company: 'Centric Consulting',
        period: 'Dec 2018 - May 2019',
        description: 'Development of Azure function & Web Frontend (JavaScript) component which integrates with Salesforce.',
      },
      {
        company: 'Nagarro',
        period: 'June 2018 - Nov 2018',
        description: 'Led a team of developers to complete development of a Billing Management System.',
      },
      {
        company: 'Bar Code India',
        period: 'Mar 2013 - May 2018',
        description: 'Development and deployment of Barcode/RFID solutions like WMS/WIP/Supply Chain Systems based on Client-Server architecture',
      },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto' id="experience">
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience