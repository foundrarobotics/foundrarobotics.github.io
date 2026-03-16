import { motion } from "framer-motion";
import heroImage from "@/assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="section-chassis min-h-screen flex flex-col relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Foundra Robotics precision actuator on technical blueprint"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Top Navigation Bar */}
      <div className="w-full pt-8 md:pt-12 z-10 relative">
        <div className="grid-container">
          <div className="col-span-12 flex justify-between items-center border-b border-border pb-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-primary font-bold text-xl leading-none tracking-wide">FOUNDRA</span>
              <span className="font-light text-sm leading-none tracking-[0.2em] text-foreground">Robotics</span>
            </div>
            <p className="text-technical">[ STATUS: ACTIVE ]</p>
          </div>
        </div>
      </div>

      {/* Main Content Distributed */}
      <div className="flex-grow flex flex-col justify-between z-10 relative">
        {/* Main headline & Buttons - Top Aligned */}
        <div className="grid-container pt-8 md:pt-16 xl:pt-24">
          <motion.div
            className="col-span-12 lg:col-span-9"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 className="text-display mb-12">
              The Universal<br />
              Robot Software<br />
              <span className="text-primary">Platform</span>
            </h1>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:info@maxwell-robotics.de"
                whileHover={{ scale: 1.05 }}
                whileTap={{ x: 2, y: 2 }}
                className="px-6 py-3 bg-primary text-primary-foreground font-mono uppercase tracking-widest text-sm border-2 border-primary shadow-hard-dark active:shadow-none transition-all cursor-pointer hover:bg-primary/90"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Specs sidebar - Full Width Bottom Bar */}
        <div className="w-full border-t border-border bg-background/40 backdrop-blur-sm mt-16 md:mt-0">
          <div className="grid-container py-8 md:py-12">
            <motion.div
              className="col-span-12 mb-6 flex items-baseline gap-4 pb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-primary uppercase">Spacetime OS</h2>
              <p className="text-technical text-muted-foreground font-mono">// System Architecture</p>
            </motion.div>

            <motion.div
              className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col border-l border-primary/30 pl-4">
                <span className="text-primary font-mono text-xs mb-1">01</span>
                <span className="font-bold text-lg lg:text-xl xl:text-2xl mb-2">Catalyst</span>
                <span className="text-sm lg:text-base text-muted-foreground">Package Manager</span>
              </div>

              <div className="flex flex-col border-l border-primary/30 pl-4">
                <span className="text-primary font-mono text-xs mb-1">02</span>
                <span className="font-bold text-lg lg:text-xl xl:text-2xl mb-2">Atom</span>
                <span className="text-sm lg:text-base text-muted-foreground">Hardware Runtime</span>
              </div>

              <div className="flex flex-col border-l border-primary/30 pl-4">
                <span className="text-primary font-mono text-xs mb-1">03</span>
                <span className="font-bold text-lg lg:text-xl xl:text-2xl mb-2">Vector</span>
                <span className="text-sm lg:text-base text-muted-foreground">Autonomy Stack</span>
              </div>

              <div className="flex flex-col border-l border-primary/30 pl-4">
                <span className="text-primary font-mono text-xs mb-1">04</span>
                <span className="font-bold text-lg lg:text-xl xl:text-2xl mb-2">Orbit</span>
                <span className="text-sm lg:text-base text-muted-foreground">Fleet Management</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
