import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, CheckCircle, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  // Typed text effect for multiple words
  const words = ["Power", "Success", "Growth", ];
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 120;
    let deletingSpeed = 50;
    let pause = 1200;
    let currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting && typedText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && typedText.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex, words]);

  return (
    <section id="home" className="relative bg-white hero-pattern py-16 lg:py-24 overflow-hidden">
      {/* Enhanced Background Animations */}
      <div className="floating-elements" />

      {/* Morphing Background Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 morphing-bg opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/20 to-purple-500/20 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Where Learning
                <span className=" bg-clip-text "> Becomes </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{typedText}<span className="border-r-2 border-accent ml-0.5 fast-blink-cursor" style={{ borderRightWidth: 4, height: '1.2em', display: 'inline-block', verticalAlign: 'middle' }} /></span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We make students fall in love with learning before the pressure begins.
                From strong foundations to advanced mastery - your success is our mission.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-4 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2500+</div>
                <div className="text-sm text-slate-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: "hsl(43, 96%, 56%)" }}>95%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg" className="btn-primary">
                <a href="#programs">
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Your Journey
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2">
                <a href="https://wa.me/919140079941">
                  <svg className="mr-2 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative order-first lg:order-none mb-10 lg:mb-0"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Students studying together in modern classroom"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* Floating Cards - now visible on all screens and with smooth floating animation */}
            <motion.div
              className="absolute -top-6 -left-2 sm:-left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs border-2 border-green-400"
              initial={true}
              animate={{
                y: [0, -8, 0],
                boxShadow: [
                  '0 6px 16px rgba(0, 0, 0, 0.06)',
                  '0 10px 20px rgba(0, 0, 0, 0.08)',
                  '0 6px 16px rgba(0, 0, 0, 0.06)',
                ],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                transform: "translateY(0) translateY(-10px)"
              }}

            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-500 h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Personalized Learning</div>
                  <div className="text-xs text-slate-500">Individual attention for every student</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-2 sm:-right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs border-2 border-blue-400"
              initial={true}
              animate={{
                y: [0, -8, 0],
                boxShadow: [
                  '0 6px 16px rgba(0, 0, 0, 0.06)',
                  '0 10px 20px rgba(0, 0, 0, 0.08)',
                  '0 6px 16px rgba(0, 0, 0, 0.06)',
                ],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                transform: "translateY(0) translateY(-10px)"

              }}

            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Trophy className="text-blue-500 h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Proven Results</div>
                  <div className="text-xs text-slate-500">Track record of excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`
  .fast-blink-cursor {
    animation: blink-cursor 0.8s steps(1) infinite;
  }
  @keyframes blink-cursor {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 0; }
  }
`}</style>
    </section>
  );
}
