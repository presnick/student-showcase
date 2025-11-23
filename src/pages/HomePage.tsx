import { useState } from 'react';
import { projects, projectTypes } from '@/data/loadProjects';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterBar } from '@/components/FilterBar';

export function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.projectType.includes(selectedFilter));

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="title">UMSI 211 Fall 2025</h1>
          <p className="subtitle">Final Project Showcase</p>
          <p className="description">
            Explore the innovative projects created by our students. From interactive web
            applications to data visualizations and simulations, each project demonstrates the
            skills and creativity developed throughout the course.
          </p>
        </div>
      </header>

      <FilterBar
        selected={selectedFilter}
        onChange={setSelectedFilter}
        projectTypes={projectTypes}
        projects={projects}
      />

      <main className="main">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found for this filter.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>UMSI 211: Data-Oriented Programming | Fall 2025</p>
          <p>University of Michigan School of Information</p>
        </div>
      </footer>
    </>
  );
}
