import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Developer',
    organization: 'Tech Corp',
    period: '2020 - Present',
    description: 'Lead developer on multiple projects, mentoring junior developers.',
    achievements: [
      'Improved application performance by 40%',
      'Led team of 5 developers',
      'Implemented CI/CD pipeline'
    ]
  },
  // Add more experiences...
];

export function Experience() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Parcours Professionnel</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Mon évolution professionnelle et académique</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className="flex items-center w-full max-w-md">
                  <div className={`w-full bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 ${
                    index % 2 === 0 ? 'mr-4' : 'ml-4'
                  }`}>
                    <div className="flex items-center mb-4">
                      {experience.type === 'work' ? (
                        <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                      )}
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{experience.organization}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{experience.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}