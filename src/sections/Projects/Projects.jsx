import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/Cisco1921routericon.png';
import freshBurger from '../../assets/The Full Stack DevNet Cloud Blog.png';
import hipsster from '../../assets/CompTIA_Network_2Bce.png';
import fitLift from '../../assets/gymnasiearbetearduinorobot.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Cisco 1921 Router"
          p="Cisco Router"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Blog on LinkedIn"
          p="Sharing my journey"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="CompTIA Network+"
          p="In progress"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Gymnasiearbete"
          p="Arduino robot"
        />
      </div>
    </section>
  );
}

export default Projects;
