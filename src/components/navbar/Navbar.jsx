import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
           Tejashree Salvi
        </motion.span>
        <div className="social">
    
          <a href="https://www.linkedin.com/in/tejashree-salvi-003aa2195/">
            <img src="/LinkedIn.png" alt="LinkedIn" />
          </a>
          
          <a href="https://github.com/tejashreeSalvi">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://keentolearn.medium.com/">
            <img src="/medium.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;