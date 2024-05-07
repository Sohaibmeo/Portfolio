import ProjectCard from '../../components/card/ProjectCard';
import ScrollProgress from '../../components/scroll-progress/ScrollProgress';
import getProjectData from '../../utils/projectData';
import './Projects.css'

const Projects = () => {
  const projectsData = getProjectData();
  return (
    <section className="parallex-container">
      <ScrollProgress />
      <h1>Projects</h1>
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
