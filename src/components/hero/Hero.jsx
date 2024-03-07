import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const handleClick = () => {
    // Perform the action to download the resume
    window.open("https://drive.google.com/file/d/1oSw53HKop-vjMEQM7Pt9t8KsEzi2JZ3p/view?usp=sharing", "_blank"); // Replace "/path/to/resume.pdf" with the actual path to your resume file
  };

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Tejashree Salvi</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Developer + DevOps
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <motion.button  variants={textVariants} onClick={handleClick}>
              Download Resume
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Writer 
      </motion.div>
      
      {/* <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;