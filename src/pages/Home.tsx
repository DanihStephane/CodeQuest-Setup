import React from 'react';
import { Introduction } from '../components/sections/Introduction';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Experience } from '../components/sections/Experience';
import { Contact } from '../components/sections/Contact';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Introduction />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}