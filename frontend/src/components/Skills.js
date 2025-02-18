import { skills } from '../data/skillsData';
import '../styles/skills.css';

export const Skills = () => {
  return (
    <section className="skills-section">
      <h2 style={{textAlign:"center"}}>My Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-progress">
              <div 
                className="progress-bar" 
                style={{ width: `${skill.percentage}%` }}
                data-percentage={skill.percentage}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};