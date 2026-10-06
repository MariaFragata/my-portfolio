import { projects } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SparkIcon from './SparkIcon'
import Tags from './Tags'
import './Projects.css'

const pad = (n) => String(n).padStart(2, '0')

function ProjectRow({ project, index }) {
  return (
    <li className="project">
      <Reveal as="article" className="project__inner" delay={index * 70}>
        <span className="project__num" aria-hidden="true">
          {pad(index + 1)}
        </span>
        <h3 className="project__name">
          <span>{project.name}</span>
          <SparkIcon />
        </h3>
        <div className="project__body">
          <p className="project__desc">{project.description}</p>
          <Tags items={project.stack} className="project__tags" />
        </div>
      </Reveal>
    </li>
  )
}

export default function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="container">
        <div className="projects__inner">
          <SectionHeading
            index="04"
            label="Selected work"
            title={
              <>
                Small things, <em>carefully made.</em>
              </>
            }
            intro="A growing shelf of things I've built. Full write-ups, screenshots, and links are on the way."
          />

          <Reveal className="projects__panel" delay={120}>
            <div className="projects__cols" aria-hidden="true">
              <span>No.</span>
              <span>Project</span>
              <span>About &amp; stack</span>
            </div>

            <ol className="projects__list">
              {projects.map((project, i) => (
                <ProjectRow key={project.name} project={project} index={i} />
              ))}
            </ol>

            <div className="projects__foot">
              <span>
                {pad(projects.length)} entries
              </span>
              <span className="projects__more">
                More compiling
                <span className="projects__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
