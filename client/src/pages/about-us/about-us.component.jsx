import "./about-us.styles.scss";
import { ReactComponent as GithubLogo } from "../../assets/github.svg";

const technologies = ["React", "Routing", "Hooks", "Redux", "Saga", "Firebase", "Express", "Stripe"]

const AboutUs = () => (
    <div className="about-us">
        <GithubLogo className="github-logo"/>
        <p className="description">
            This app created by&nbsp;<a href="https://github.com/Yhuley" className="github-link">Yhuley</a>&nbsp;using: 
        </p>
        <div className="tecnologies">
            {technologies.map(technologie => <p className="technologie" key={technologie}>{technologie}</p>)}
        </div>
    </div>
)

export default AboutUs