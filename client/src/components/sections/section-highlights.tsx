import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, BookOpen, Target, Star, Zap } from "lucide-react";

const highlights = [
	{
		id: 1,
		icon: Users,
		number: "6-8",
		title: "Foundation Classes",
		subtitle: "Building Strong Roots",
		description: "Where learning becomes fun and concepts become crystal clear",
		color: "bg-blue-500",
		gradient: "from-blue-400 to-blue-600",
		stats: [
			{ label: "Students", value: "800+" },
			{ label: "Success Rate", value: "96%" }
		]
	},
	{
		id: 2,
		icon: Target,
		number: "9-10",
		title: "Board Excellence",
		subtitle: "Mastering the Boards",
		description: "Transforming board exam pressure into confident success",
		color: "bg-green-500",
		gradient: "from-green-400 to-emerald-600",
		stats: [
			{ label: "Students", value: "1200+" },
			{ label: "90+ Scores", value: "89%" }
		]
	},
	{
		id: 3,
		icon: Trophy,
		number: "11-12",
		title: "Advanced Mastery",
		subtitle: "Future-Ready Excellence",
		description: "Preparing leaders for tomorrow's challenges and opportunities",
		color: "bg-purple-500",
		gradient: "from-purple-400 to-indigo-600",
		stats: [
			{ label: "Students", value: "500+" },
			{ label: "Top Ranks", value: "94%" }
		]
	}
];

const floatingElements = [
	{ icon: BookOpen, color: "text-blue-400", position: "top-20 left-10", delay: 0 },
	{ icon: Star, color: "text-yellow-400", position: "top-32 right-16", delay: 0.5 },
	{ icon: Zap, color: "text-purple-400", position: "bottom-24 left-20", delay: 1 },
	{ icon: Trophy, color: "text-green-400", position: "bottom-32 right-12", delay: 1.5 }
];

export default function SectionHighlights() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section className="py-16 lg:py-24 bg-slate-900 relative overflow-hidden" ref={ref}>
			{/* Animated Background */}
			<div className="absolute inset-0">
				{/* Gradient Orbs */}
				<div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
				
				{/* Floating Icons */}
				{floatingElements.map((element, index) => (
					<motion.div
						key={index}
						className={`absolute ${element.position}`}
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 0.3, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ 
							duration: 2, 
							delay: element.delay,
							repeat: Infinity,
							repeatType: "reverse",
							ease: "easeInOut"
						}}
					>
						<element.icon className={`h-8 w-8 ${element.color}`} />
					</motion.div>
				))}
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<motion.div 
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
						Class-wise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Excellence</span>
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
						Each class level receives specialized attention with customized teaching methods 
						designed for optimal learning outcomes.
					</p>
				</motion.div>

				{/* Highlights Grid */}
				<div className="grid lg:grid-cols-3 gap-8">
					{highlights.map((highlight, index) => (
						<motion.div
							key={highlight.id}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
						>
							<Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 rounded-2xl overflow-hidden group hover:bg-slate-800/70 transition-all duration-300">
								<CardContent className="p-8 relative">
									{/* Background Gradient */}
									<div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${highlight.gradient} opacity-10 rounded-bl-full`} />
									
									{/* Header */}
									<div className="flex items-center justify-between mb-6">
										<div className="flex items-center space-x-4">
											<div className={`w-12 h-12 ${highlight.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
												<highlight.icon className="h-6 w-6 text-white" />
											</div>
											<div>
												<Badge variant="secondary" className="mb-2 bg-slate-700 text-slate-300">
													Classes {highlight.number}
												</Badge>
											</div>
										</div>
										<div className="text-right">
											<div className="text-3xl font-bold text-white">{highlight.number}</div>
										</div>
									</div>

									{/* Content */}
									<div className="space-y-4">
										<div>
											<h3 className="text-xl font-bold text-white mb-1">{highlight.title}</h3>
											<p className={`text-sm font-medium bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent`}>
												{highlight.subtitle}
											</p>
										</div>
										<p className="text-slate-300 leading-relaxed">{highlight.description}</p>
									</div>

									{/* Stats */}
									<div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700">
										{highlight.stats.map((stat, statIndex) => (
											<div key={statIndex} className="text-center">
												<div className="text-2xl font-bold text-white">{stat.value}</div>
												<div className="text-xs text-slate-400">{stat.label}</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div 
					className="text-center mt-16"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<p className="text-slate-300 mb-6">Ready to discover which program suits your child best?</p>
					<motion.button
						className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => {
							const element = document.querySelector('#programs');
							if (element) element.scrollIntoView({ behavior: 'smooth' });
						}}
					>
						Explore All Programs
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}