import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
	{
		id: 1,
		text: "U transformed my sons's approach to learning. He went from struggling with Math to scoring 94% in Class 10 boards. The teachers here truly care about each student's progress.",
		author: "Mr. Akhilesh Sharma",
		relation: "Parent of Shivanshi Sharma (Class 10)",
		image:
			"/shivansh.jpg",
	},
	{
		id: 2,
		text: "The foundation I built here in Classes 6-8 helped me excel throughout school. Now in Class 11, I'm confident about both boards and JEE preparation. Thank you U!",
		author: "Abhinav Verma",
		relation: "Student (Class 10)",
		image:
			"/abhinav.jpg",
	},
	{
		id: 3,
		text: "The personalized attention and systematic approach at U made all the difference. I scored 94% in Class 10 and am now confidently tackling Class 11 concepts.",
		author: "Mr. Chandan Shukala",
		relation: "Student (Class 11)",
		image:
			"/chandan.jpg",
	},

	{
		id: 4,
		text: "Before joining U, I lacked confidence in academics. But with the guidance I received here, not only did my scores improve drastically, but so did my attitude towards learning. I proudly scored 94% in my Class 10 boards!",
		author: "Mrs. Natasha Malhotra",
		relation: "Student of a(Class 11)",
		image:
			"/tamasha.jpeg",
	},
	{
		id: 5,
		text: "Joining U in middle school gave me a strong academic base. The techniques and concepts I learned then still help me today. As a Class 12 student aiming for JEE, I feel well-prepared and supported every step of the way.",
		author: "Saksham Mishra",
		relation: "Student (Class 12)",
		image:
			"/saksham.png",
	},
	{
		id: 6,
		text: "U has been a game-changer for my education. The teachers focus on understanding rather than rote learning, which helped me in Class 10. I now tackel Class 11 with confidence and clarity.",
		author: "Amit Yadav",
		relation: "Student (Class 11)",
		image: "/amit.png",
	},
];

export default function Testimonials() {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		let currentIndex = 0;
		let interval: NodeJS.Timeout;

		const scrollNext = () => {
			const cardWidth =
				scrollContainer.firstChild instanceof HTMLElement
					? scrollContainer.firstChild.offsetWidth + 32 // +gap-8 (8 * 4 = 32px)
					: 300;
			currentIndex = (currentIndex + 1) % testimonials.length;
			scrollContainer.scrollTo({
				left: cardWidth * currentIndex,
				behavior: "smooth",
			});
		};

		const start = () => {
			interval = setInterval(scrollNext, 3000);
		};

		const pause = () => clearInterval(interval);

		scrollContainer.addEventListener("mouseenter", pause);
		scrollContainer.addEventListener("mouseleave", start);

		start();

		return () => {
			pause();
			scrollContainer.removeEventListener("mouseenter", pause);
			scrollContainer.removeEventListener("mouseleave", start);
		};
	}, []);

	return (
		<section id="testimonials" className="py-16 lg:py-24 bg-slate-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-slate-800 mb-6">
						What Students & Parents Say
					</h2>
					<p className="text-xl text-slate-600">
						Real stories from our S.R. FUTURE CLASSES family
					</p>
				</div>

				<div
					ref={scrollRef}
					className="flex overflow-x-auto gap-8 scroll-smooth snap-x snap-mandatory pb-4"
				>
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="snap-start min-w-[300px] max-w-sm flex-shrink-0"
						>
							<Card className="bg-white rounded-2xl shadow-lg h-full">
								<CardContent className="p-6 space-y-4">
									<div className="flex items-center space-x-1 text-amber-400">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="h-4 w-4 fill-current" />
										))}
									</div>
									<p className="text-slate-600 italic">
										"{testimonial.text}"
									</p>
									<div className="flex items-center space-x-3">
										<img
											src={testimonial.image}
											alt={`${testimonial.author} testimonial photo`}
											className="rounded-full object-cover w-20 h-20"
										/>
										<div>
											<div className="font-semibold text-slate-800">
												{testimonial.author}
											</div>
											<div className="text-sm text-slate-500">
												{testimonial.relation}
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
