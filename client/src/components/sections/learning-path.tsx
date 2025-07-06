import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sprout, Target, Crown } from "lucide-react";

const learningPathData = [
  {
    id: 1,
    classRange: "Classes 6 to 8",
    title: "Strong Foundation",
    subtitle: "Building the fundamentals that last a lifetime",
    icon: Sprout,
    gradient: "gradient-blue",
    bgColor: "bg-blue-50",
    bulletColor: "bg-primary",
    borderColor: "border-primary",
    features: [
      "Build rock-solid basics in Math, Science, and Grammar",
      "Learn through real-life examples and visual diagrams",
      "Weekly revision sessions with custom worksheets",
      "Concept-building through interactive activities",
      "Focus on developing curiosity and learning habits"
    ],
    outcome: "Concept clarity and genuine interest in learning",
    quote: "Strong roots create mighty trees - we plant the seeds of lifelong learning."
  },
  {
    id: 2,
    classRange: "Classes 9 & 10",
    title: "Board Excellence", 
    subtitle: "Mastering boards with confidence and clarity",
    icon: Target,
    gradient: "gradient-green",
    bgColor: "bg-emerald-50",
    bulletColor: "bg-accent",
    borderColor: "border-accent",
    features: [
      "NCERT-based deep preparation with expert guidance",
      "Regular chapter-wise tests and mock board exams",
      "Strong application-based problem understanding",
      "Time management and exam strategy sessions",
      "Stress management and confidence building"
    ],
    outcome: "Complete board exam preparation with unshakeable confidence",
    quote: "We turn board exam pressure into a step-by-step journey of success."
  },
  {
    id: 3,
    classRange: "Classes 11 & 12",
    title: "Advanced Mastery",
    subtitle: "Future-ready excellence in every dimension",
    icon: Crown,
    gradient: "gradient-purple",
    bgColor: "bg-purple-50",
    bulletColor: "bg-purple-500",
    borderColor: "border-purple-500",
    features: [
      "In-depth subject mastery + competitive exam foundation (JEE/NEET)",
      "Personalized one-on-one mentorship sessions",
      "Smart problem-solving techniques and shortcuts",
      "Combined boards + entrance coaching approach",
      "Career guidance and future planning sessions"
    ],
    outcome: "Fully prepared for future exams and real-world challenges",
    quote: "Excellence isn't a skill, it's an attitude we help you develop."
  }
];

export default function LearningPath() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-16 lg:py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Your Class. Your Level. <span className="text-primary">Our Plan.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every student's journey is unique. We've crafted specialized programs that grow with you, 
            ensuring you're always challenged, supported, and prepared for what's next.
          </p>
        </motion.div>

        {/* Learning Path Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {learningPathData.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="card-hover glow-effect bg-white rounded-2xl shadow-lg overflow-hidden h-full animated-bg">
                {/* Card Header */}
                <CardHeader className={`${path.gradient} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                      <path.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium opacity-90">{path.classRange}</div>
                    <h3 className="text-2xl font-bold">{path.title}</h3>
                    <p className="opacity-90">{path.subtitle}</p>
                  </div>
                </CardHeader>

                {/* Card Content */}
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    {path.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 ${path.bulletColor} rounded-full mt-2 flex-shrink-0`} />
                        <p className="text-slate-600">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className={`${path.bgColor} rounded-xl p-4`}>
                    <div className="font-semibold text-slate-800 mb-2">🎯 Outcome:</div>
                    <p className="text-slate-600">{path.outcome}</p>
                  </div>

                  {/* Quote */}
                  <div className={`border-l-4 ${path.borderColor} pl-4`}>
                    <p className="text-slate-600 italic">"{path.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
