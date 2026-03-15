import { motion } from "framer-motion";

const customers = [
  "Free and open platform anyone can download and use",
  "Direct partnerships with robot manufacturers",
  "System integrator channel partnerships",
  "Land-and-expand within each facility",
];

const revenue = [
  "Support plans for reliability and stability",
  "Enterprise edition with fleet management and safety controls",
  "Training and certification programs",
  "Custom integration services for large deployments",
];

const BusinessSection = () => {
  return (
    <section className="section-chassis py-16 md:py-[15vh]">
      <div className="grid-container">
        <div className="col-span-12 mb-12">
          <p className="text-technical mb-6">// Go-to-Market</p>
          <h2 className="text-section">
            Strategy &<br />
            <span className="text-primary">Business Model</span>
          </h2>
        </div>

        <motion.div
          className="col-span-12 md:col-span-6 border border-border p-6 md:p-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          <p className="text-technical mb-6">// Customer Acquisition</p>
          <ul className="space-y-4">
            {customers.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="font-mono text-primary font-bold shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-6 border border-border p-6 md:p-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          <p className="text-technical mb-6">// Revenue Streams</p>
          <ul className="space-y-4">
            {revenue.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="font-mono text-primary font-bold shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="col-span-12 mt-8 border border-primary p-6 bg-card">
          <p className="font-mono text-sm text-center">
            <span className="text-primary font-bold">[ THESIS ]</span>{" "}
            We are the Ubuntu of Robotics — free foundation that becomes standard, revenue comes from scaling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
