import { motion } from "framer-motion";
import { Footer } from "../components/Footer";

const services = [
  {
    title: "Freight & Shipping",
    desc: "Seamless local and international freight solutions tailored to your needs.",
  },
  {
    title: "Warehousing & Storage",
    desc: "Modern, secure, and scalable storage spaces to optimize inventory handling.",
  },
  {
    title: "Real-Time Tracking",
    desc: "Track your cargo in real-time with accurate ETAs and event updates.",
  },
  {
    title: "Customs & Documentation",
    desc: "End-to-end paperwork, compliance, and clearance handled by experts.",
  },
  {
    title: "Fleet Management",
    desc: "Control your fleet with our smart management tools and analytics.",
  },
];

export default function Services() {
  return (
    <>
      <main className="py-20 max-w-6xl mx-auto" id="services">
        {/* Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our end-to-end logistics solutions built to empower global commerce.
          </p>
        </motion.section>

        {/* Cards Grid */}
        <div className="grid gap-10 mt-20 md:grid-cols-2">
          {services.map(({ title, desc }, idx) => {
            const isLeftColumn = idx % 2 === 0;
            const delay = idx * 0.2;

            const cardVariants = {
              hidden: { opacity: 0, x: isLeftColumn ? -60 : 60 },
              visible: { opacity: 1, x: 0 },
            };

            return (
              <motion.div
                key={`service-${idx}`}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
                className="p-6 rounded-2xl bg-blue-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Separated Footer with margin */}
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
