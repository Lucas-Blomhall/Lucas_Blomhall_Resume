import styles from './HeroStyles.module.css';
import heroImg from '../../assets/LinkedIn profile picture-modified circle.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';

import youtubeLight from '../../assets/youtube-dark.svg';
import youtubeDark from '../../assets/youtube-light.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Lucas Resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";

//nytt cv

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const youtubeIcon = theme === 'light' ? youtubeLight : youtubeDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Lucas Blomhäll"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>    
      <PopupWidget
        url="https://calendly.com/lucas-blomhall"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
  
      <div className={styles.info}>
        <h1>
            Lucas 
            <br />
            
        </h1>
        <h2>Full Stack DevNetOps ingenjör/tekniker</h2>
        <span>
          <a href="https://github.com/Lucas-Blomhall" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-blomh%C3%A4ll-737314228/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.youtube.com/@lucasblomhall1184" target="_blank">
            <img src={youtubeIcon} alt="Youtube icon" />
          </a>
          <div className={styles.followButton}>
          <a className={styles.libutton} href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=lucas-blomhall" target="_blank"><b>Follow on LinkedIn</b></a>
          </div>          
          </span>
        <p className={styles.description}>
            Fluent in React.js, Python, .NET C#, Linux and Cisco Network. Currently studying for the CompTIA Network+ certificate.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
