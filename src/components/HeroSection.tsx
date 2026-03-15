import { motion } from "framer-motion";
import heroImage from "@/assets/hero-actuator.jpg";

const HeroSection = () => {
  return (
    <section className="section-chassis min-h-screen flex flex-col justify-end py-8 md:py-12 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Foundra Robotics precision actuator on technical blueprint"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="grid-container relative z-10">
        {/* Top bar */}
        <div className="col-span-12 flex justify-between items-center border-b border-border pb-4 mb-8 md:mb-16">
          <p className="text-technical">Foundra Robotics</p>
          <p className="text-technical">[ STATUS: ACTIVE ]</p>
        </div>

        {/* Main headline */}
        <motion.div
          className="col-span-12 lg:col-span-8 mb-8 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <h1 className="text-display">
            The Universal<br />
            Robot Software<br />
            <span className="text-primary">Platform</span>
          </h1>
        </motion.div>

        {/* Specs sidebar */}
        <motion.div
          className="col-span-12 lg:col-span-4 border-l border-border pl-4 lg:pl-6 mb-8 lg:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-technical mb-6">// Technical Overview</p>
          <p className="text-sm leading-relaxed max-w-[60ch] mb-8">
            An embodiment-free autonomy stack for industrial applications.
            One configuration. Full-stack robot software. Zero integration effort.
          </p>
          <ul className="space-y-2 font-mono text-sm tabular-nums">
            <li className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Platform</span>
              <span>Spacetime OS</span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Runtime</span>
              <span>Atom</span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Autonomy</span>
              <span>Vector</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Fleet Mgmt</span>
              <span>Orbit</span>
            </li>
          </ul>
        </motion.div>

        {/* CTA buttons */}
        <div className="col-span-12 flex flex-wrap gap-4 mb-8">
          <motion.a
            href="#contact"
            whileTap={{ x: 2, y: 2 }}
            className="px-6 py-3 bg-primary text-primary-foreground font-mono uppercase tracking-widest text-sm border-2 border-primary shadow-hard-dark active:shadow-none transition-all cursor-pointer"
          >
            Initialize Contact
          </motion.a>
          <motion.a
            href="#platform"
            whileTap={{ x: 2, y: 2 }}
            className="px-6 py-3 bg-secondary text-foreground font-mono uppercase tracking-widest text-sm border-2 border-border shadow-hard-dark active:shadow-none transition-all cursor-pointer"
          >
            View Specifications
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
