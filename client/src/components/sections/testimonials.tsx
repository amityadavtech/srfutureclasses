import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "U transformed my daughter's approach to learning. She went from struggling with Math to scoring 95% in Class 10 boards. The teachers here truly care about each student's progress.",
    author: "Mrs. Priya Sharma",
    relation: "Parent of Ananya (Class 10)",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    text: "The foundation I built here in Classes 6-8 helped me excel throughout school. Now in Class 12, I'm confident about both boards and JEE preparation. Thank you U!",
    author: "Arjun Patel",
    relation: "Student (Class 12)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    text: "The personalized attention and systematic approach at U made all the difference. My son scored 94% in Class 10 and is now confidently tackling Class 11 concepts.",
    author: "Mr. Rajesh Kumar",
    relation: "Parent of Rohan (Class 11)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-6">What Students & Parents Say</h2>
          <p className="text-xl text-slate-600">Real stories from our S.R. FUTURE CLASSES family</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-white rounded-2xl shadow-lg h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.image}
                      alt={`${testimonial.author} testimonial photo`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.relation}</div>
                    </div>
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
