import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";

const contactMethods = [
	{
		icon: Phone,
		title: "Call Us Now",
		detail: "+91 9140079941",
		href: "tel:+919140079941",
		bgColor: "bg-primary",
	},
	{
		icon: MessageCircle,
		title: "WhatsApp Support",
		detail: "Message us instantly",
		href: "https://wa.me/919140079941",
		bgColor: "bg-green-500",
	},
	{
		icon: MapPin,
		title: "Visit Our Center",
		detail: "Khamaraiya Pandit, Lakhimpur Kheri, Uttar Pradesh, 262722",
		href: "#",
		bgColor: "bg-slate-600",
	},

];

export default function Contact() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="contact" className="py-16 lg:py-24 bg-white" ref={ref}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Contact Info */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -30 }}
						animate={
							isInView
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: -30 }
						}
						transition={{ duration: 0.8 }}
					>
						<div>
							<h2 className="text-4xl font-bold text-slate-800 mb-6">
								Ready to Start Your Success Journey?
							</h2>
							<p className="text-xl text-slate-600 leading-relaxed">
								Join thousands of students who have ed their academic journey
								with S.R. Future Classes. Let's discuss how we can help your child
								excel.
							</p>
						</div>

						{/* Contact Methods */}
						<div className="space-y-6">
							{contactMethods.map((method, index) => (
								<motion.div
									key={index}
									className="flex items-center space-x-4"
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView
											? { opacity: 1, y: 0 }
											: { opacity: 0, y: 20 }
									}
									transition={{
										duration: 0.8,
										delay: 0.2 + index * 0.1,
									}}
								>
									<div
										className={`w-12 h-12 ${method.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
									>
										<method.icon className="text-white h-5 w-5" />
									</div>
									<div>
										<div className="font-semibold text-slate-800">
											{method.title}
										</div>
										{method.href.startsWith("http") ||
										method.href.startsWith("tel:") ||
										method.href.startsWith("mailto:") ? (
											<a
												href={method.href}
												className={`${
													method.bgColor === "bg-green-500"
														? "text-green-600"
														: method.bgColor === "bg-blue-500"
														? "text-blue-600"
														: "text-primary"
												} hover:underline`}
											>
												{method.detail}
											</a>
										) : (
											<p className="text-slate-600">
												{method.detail}
											</p>
										)}
									</div>
								</motion.div>
							))}
						</div>

						{/* Quick Action Buttons */}
						<motion.div
							className="flex flex-col sm:flex-row gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Button
								asChild
								className="bg-green-500 hover:bg-green-600 btn-primary"
							>
								<a href="https://wa.me/919140079941">
									<svg
										className="mr-2 h-4 w-4"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
									</svg>
									Chat on WhatsApp
								</a>
							</Button>
							<Button
								asChild
								variant="outline"
								className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
							>
								<a href="tel:+919140079941">
									<Phone className="mr-2 h-4 w-4" />
									Schedule a Call
								</a>
							</Button>
						</motion.div>
					</motion.div>

					{/* Contact Image */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 0 }}
						animate={
							isInView
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: 0 }
						}
						transition={{ duration: 0, delay: 0 }}
					>
						<img
							src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
							alt="Modern coaching center reception area"
							className="rounded-2xl shadow-2xl w-full h-auto"
						/>

						{/* Contact Info Card */}
						<motion.div
							className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6"
							initial={{ opacity: 0, y: 20 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<div className="text-center">
								<div className="text-2xl font-bold text-slate-800 mb-2">
									📞 Quick Contact
								</div>
								<p className="text-slate-600 mb-4">
									Get instant answers to your questions
								</p>
								<div className="flex justify-center space-x-4">
									<div className="text-center">
										<div className="text-sm font-semibold text-slate-800">
											Response Time
										</div>
										<div className="text-xs text-primary">
											Within 30 minutes
										</div>
									</div>
									<div className="text-center">
										<div className="text-sm font-semibold text-slate-800">
											Availability
										</div>
										<div className="text-xs text-accent">
											9 AM - 8 PM
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
