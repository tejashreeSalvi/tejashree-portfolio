import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Engineer - Product and Platform Engineer",
    company: "Altimetrik India  : (2022 - till date)",
    product: "Enterprise Oneclick Project Onboarding (Client: Novartis)",
    // img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: [
        "Designed and Implemented scalable Flask APIs and workers that serves 5K+ requests daily",
        "Automated Python Script for migration of 10k+ users for uninterrupted LDAP synchronization across tools",
        "Collaborated with Stakeholders for Requirement gathering, Production Deployment using CRQ process",
        "Deployed the new microservice on Kubernetes cluster, developed CICD pipelines for continuous deployment",
        "Implemented a Report dashboard for quarterly audit purposes, reducing OPS team workload by 80%.",
        "Continuous Integration/Deployment Pipelines, pull request, code reviews, unit/ e2e testing."
    ]
  },
  {
    id: 2,
    title: "Associate Engineer - Product and Platform Development",
    company: "Altimetrik India : (2021 - 2022)",
    product: "E-OCPO (Client: Novartis)",
    // img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: [
        "Developed distributed application(microservices) using Flask, cutting new user and project onboarding time by 35%. Implemented responsive designs using React based on user inputs",
        "Integrated third-party REST API for project and user onboarding across DevOps tools: Jenkins, Jira, Bitbucket, Up4Growth, Sonarqube, Checkmarx.",
        "Designed reusable UI components based on user inputs, boosting code quality by 40%",
        "Utilized AWS services: DynamoDB for storage, CloudWatch for monitoring/logging, Secret Manager for credential security, and EKS for container orchestration.",
        "Increased code quality by writing unit test suites using pytest, resulting 60% decrease in post-deployment defects."
    ]
  },
  {
    id: 3,
    title: "Project Intern - Product and Platform Development",
    company: "Altimetrik India (2021)",
    product: "OCPO altimetrik",
    // img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: [
        "Developed a single-click, role-based project onboarding and user management MVP OCPO for 'Altimetrik'",
        "Worked on Backend endpoints: Integrated Bitbucket and Jira third party rest-api.",
        "Worked on UI: Designed the UI components using Figma.",
        "Implemented the UI code using React and Material UI library",
        "Learned about Agile Methodology, Scrum Ceremony, Git WorkFlows, Presention and many more.",
        "Technology Stack: React.js, Flask, MongoDB Atlas, and Material UI."
    ]
  },
  {
    id: 4,
    title: "Angular Web Developer Intern at Ercess Live",
    company: "Ercess-Live : (2020)",
    product: "Ercess Offical website",
    // img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: [
        "Developed an Admin Portal using CRUD operations.",
        "Implemented UI part and Integrated with REST-API.",
        "Technology Stack: Angular, Bootstrap, HTML, CSS and JavaScript."
    ]
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <h1>{item.company}</h1>
            <h1>{item.product}</h1>
            <ul>
                {item.desc.map((point, index) => (
                    <li key={index}><p>{point}</p></li>
                ))}
            </ul>
            
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Where I've Worked</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;