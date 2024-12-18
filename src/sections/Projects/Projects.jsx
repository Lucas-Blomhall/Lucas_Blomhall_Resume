import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/Cisco1921routericon.png';
import freshBurger from '../../assets/hemnet.png';
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
          link="https://www.linkedin.com/posts/lucas-blomhall_fullstackdevnetcloudtechnician-networkautomation-activity-7260634907687743488-JFjr?utm_source=share&utm_medium=member_desktop"
          h3="Cisco 1921 Router"
          p="SIEM Engineer project"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Lucas-Blomhall/Flaskapphemnet"
          h3="Flaskapp Hemnet"
          p="With PostgreSQL"
        />
        <ProjectCard
          src={hipsster}
          link="https://www.comptia.org/certifications/network"
          h3="CompTIA Network+"
          p="Cert in progress"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.linkedin.com/posts/lucas-blomhall_im-happy-to-share-this-my-high-school-graduation-activity-7119276674608709633-4fGJ?utm_source=share&utm_medium=member_desktop"
          h3="Gymnasiearbete"
          p="IoT: Arduino robot"
        />
      </div>
    </section>
  );
}

export default Projects;
