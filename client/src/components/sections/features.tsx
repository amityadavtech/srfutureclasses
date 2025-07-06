import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, Users, TrendingUp, Heart } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Expert Faculty",
    description: "Experienced teachers with proven track records and passion for student success.",
    bgColor: "bg-blue-100",
    iconColor: "text-primary"
  },
  {
    icon: Users,
    title: "Small Batches",
    description: "Limited students per batch ensuring personalized attention and focused learning.",
    bgColor: "bg-green-100",
    iconColor: "text-accent"
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Consistent high performance with 95% students achieving their target scores.",
    bgColor: "bg-amber-100",
    iconColor: "text-yellow-600"
  },
  {
    icon: Heart,
    title: "Caring Environment",
    description: "Supportive atmosphere where students feel motivated, confident, and valued.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500"
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Why Families Trust S.R. Future CLasses</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our proven approach combines expertise, care, and innovation to deliver results that speak for themselves.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`${feature.iconColor} h-8 w-8`} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
