import { motion } from "framer-motion";

const problems = [
  {
    id: "01",
    title: "Diverse Hardware Ecosystem",
    description: "Hundreds of robot platforms and sensors, no universal standard.",
  },
  {
    id: "02",
    title: "Missing Middle Layer",
    description: "A gap between hardware abstraction and robot autonomy logic.",
  },
  {
    id: "03",
    title: "Reinventing the Wheel",
    description: "Every team rebuilds the hardware runtime, perception, planning, and control pipelines from scratch.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-chassis py-16 md:py-[15vh]">
      <div className="grid-container">
        <div className="col-span-12 lg:col-span-8">
          <p className="text-technical mb-6">// Problem Statement</p>
          <h2 className="text-section mb-12">
            System Integrators Rebuild<br />
            the Software Stack for<br />
            <span className="text-primary">Every Robot & Payload</span>
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-4 border-l border-border pl-4 lg:pl-6">
          <p className="text-technical mb-6">// Pain Points</p>
        </div>

        {problems.map((problem, index) => (
          <motion.div
            key={problem.id}
            className="col-span-12 md:col-span-4 border border-border p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="font-mono text-primary text-2xl font-bold">{problem.id}</span>
            <h3 className="font-bold text-lg mt-3 mb-2">{problem.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
