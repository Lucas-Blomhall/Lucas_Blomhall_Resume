import styles from './CertificatesStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Certificates() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="KYH .NET C# Developer (Exam)" />
        <SkillList src={checkMarkIcon} skill="Nackademin Python AI Data Scientist (Exam)" />
        <SkillList src={checkMarkIcon} skill="Cisco Certified Support Technicians (CCST)" />
      </div>      
    </section>
  );
}

export default Certificates;
