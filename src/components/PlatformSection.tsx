import { motion } from "framer-motion";

const products = [
  {
    name: "Catalyst",
    label: "Package Manager",
    description: "One configuration automatically builds a complete robot system. Standardized, extensible, zero integration effort.",
  },
  {
    name: "Atom",
    label: "Hardware Runtime",
    description: "Unified interface, state awareness, safety awareness. A reliable, diagnosable, adaptable hardware abstraction layer.",
  },
  {
    name: "Vector",
    label: "Autonomy Stack",
    description: "Perception, mapping, path planning, navigation — built for any robotic platform through configuration.",
  },
  {
    name: "Orbit",
    label: "Fleet Management",
    description: "Multi-robot orchestration for industrial-scale deployments. System-level coordination across heterogeneous fleets.",
  },
];

const PlatformSection = () => {
  return (
    <section id="platform" className="section-chassis py-16 md:py-[15vh]">
      <div className="grid-container">
        <div className="col-span-12 mb-12">
          <p className="text-technical mb-6">// Solution Architecture</p>
          <h2 className="text-section">
            Spacetime OS:<br />
            <span className="text-primary">One Configuration,</span><br />
            Full-Stack Robot Software
          </h2>
        </div>

        {/* Key properties */}
        <div className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
          <div className="space-y-6">
            {["Configurable", "Flexible", "Expandable", "Fast Deployment"].map((prop) => (
              <div key={prop} className="border-l-2 border-primary pl-4">
                <span className="font-mono text-sm font-bold">{prop}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="border border-border p-6 bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-bold text-lg">{product.name}</span>
                <span className="text-technical">/ {product.label}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
