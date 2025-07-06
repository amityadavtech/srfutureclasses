import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		alt: "Students studying in modern classroom",
		category: "Classes 6-8",
		title: "Foundation Classes",
		description: "Interactive learning sessions for young minds",
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		alt: "Mathematics class in session",
		category: "Classes 9-10",
		title: "Board Preparation",
		description: "Intensive board exam preparation sessions",
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Science laboratory practical session",
		category: "Classes 11-12",
		title: "Advanced Learning",
		description: "Comprehensive science and mathematics mastery",
	},

];

const categories = [
	"All",
	"Classes 6-8",
	"Classes 9-10",
	"Classes 11-12",
];

export default function Gallery() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedImage, setSelectedImage] = useState<
		typeof galleryImages[0] | null
	>(null);

	const filteredImages =
		selectedCategory === "All"
			? galleryImages
			: galleryImages.filter((img) => img.category === selectedCategory);

	// Keyboard support for gallery modal
	useEffect(() => {
		if (!selectedImage) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setSelectedImage(null);
			} else if (e.key === "ArrowLeft") {
				const currentIndex = filteredImages.findIndex(
					(img) => img.id === selectedImage.id
				);
				const prevIndex =
					currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
				setSelectedImage(filteredImages[prevIndex]);
			} else if (e.key === "ArrowRight") {
				const currentIndex = filteredImages.findIndex(
					(img) => img.id === selectedImage.id
				);
				const nextIndex =
					currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
				setSelectedImage(filteredImages[nextIndex]);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [selectedImage, filteredImages]);

	return (
		<>
			<section id="gallery" className="py-16 lg:py-24 bg-white relative" ref={ref}>
				{/* Background Animation */}
				<div className="absolute inset-0 overflow-hidden opacity-5">
					<div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse" />
					<div className="absolute bottom-20 right-10 w-24 h-24 bg-accent rounded-full animate-bounce" />
					<div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-500 rounded-full animate-ping" />
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					{/* Section Header */}
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
							Our{" "}
							<span className="text-primary">Learning Gallery</span>
						</h2>
						<p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
							Take a visual journey through our vibrant learning environment.
							From foundation classes to advanced mastery, witness the excellence
							that defines S.R. FUTURE CLASSES.
						</p>
					</motion.div>

					{/* Category Filter */}
					<motion.div
						className="flex flex-wrap justify-center gap-3 mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						{categories.map((category) => (
							<Button
								key={category}
								variant={
									selectedCategory === category ? "default" : "outline"
								}
								onClick={() => setSelectedCategory(category)}
								className={cn(
									"transition-all duration-300",
									selectedCategory === category
										? "bg-primary text-white shadow-lg scale-105"
										: "hover:bg-primary hover:text-white"
								)}
							>
								{category}
							</Button>
						))}
					</motion.div>

					{/* Gallery Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredImages.map((image, index) => (
							<motion.div
								key={`${selectedCategory}-${image.id}`}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={
									isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
								}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								layout
							>
								<Card className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
									<CardContent className="p-0 relative">
										<div className="relative overflow-hidden">
											<img
												src={image.src}
												alt={image.alt}
												className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

											{/* Zoom Icon */}
											<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<Button
													size="icon"
													variant="secondary"
													className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-0"
													onClick={() => setSelectedImage(image)}
												>
													<ZoomIn className="h-4 w-4 text-white" />
												</Button>
											</div>
										</div>

										{/* Image Info */}
										<div className="p-4">
											<div className="flex items-center justify-between mb-2">
												<span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
													{image.category}
												</span>
											</div>
											<h3 className="font-semibold text-slate-800 mb-1">
												{image.title}
											</h3>
											<p className="text-sm text-slate-600">
												{image.description}
											</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Enhanced Image Modal */}
			{selectedImage && (
				<motion.div
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setSelectedImage(null)}
				>
					{/* Close Button */}
					<Button
						size="icon"
						variant="ghost"
						className="absolute top-2 right-6 z-10 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 w-12 h-12 rounded-full"
						onClick={() => setSelectedImage(null)}
					>
						<X className="h-6 w-6" />
					</Button>

					{/* Image Container */}
					<motion.div
						className="relative max-w-6xl max-h-[95vh] w-full mx-4"
						initial={{ scale: 0.8, opacity: 0, y: 50 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.8, opacity: 0, y: 50 }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
						onClick={(e) => e.stopPropagation()}
					>
						{/* Main Image */}
						<div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
							<img
								src={selectedImage.src}
								alt={selectedImage.alt}
								className="w-full h-auto max-h-[75vh] object-contain"
							/>

							{/* Image Info Overlay (move to top) */}
							<div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent p-6 text-white z-20">
								<div className="flex items-center justify-between mb-3">
									<span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
										{selectedImage.category}
									</span>
									<div className="flex items-center space-x-2">
										<Button
											size="sm"
											variant="ghost"
											className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-xs"
											onClick={() => setSelectedImage(null)}
										>
											Close
										</Button>
									</div>
								</div>
								<h3 className="text-xl font-bold mb-1">
									{selectedImage.title}
								</h3>
				
							</div>
						</div>

						{/* Navigation Dots */}
						<div className="flex justify-center mt-4 space-x-2">
							{filteredImages.map((img, index) => (
								<button
									key={img.id}
									onClick={() => setSelectedImage(img)}
									className={`w-2 h-2 rounded-full transition-all duration-300 ${
										img.id === selectedImage.id
											? "bg-white w-8"
											: "bg-white/50 hover:bg-white/75"
									}`}
								/>
							))}
						</div>
					</motion.div>

					{/* Navigation Arrows */}
					<Button
						size="icon"
						variant="ghost"
						className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 w-12 h-12 rounded-full"
						onClick={(e) => {
							e.stopPropagation();
							const currentIndex = filteredImages.findIndex(
								(img) => img.id === selectedImage.id
							);
							const prevIndex =
								currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
							setSelectedImage(filteredImages[prevIndex]);
						}}
					>
						<motion.div whileHover={{ x: -2 }}>
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</motion.div>
					</Button>

					<Button
						size="icon"
						variant="ghost"
						className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 w-12 h-12 rounded-full"
						onClick={(e) => {
							e.stopPropagation();
							const currentIndex = filteredImages.findIndex(
								(img) => img.id === selectedImage.id
							);
							const nextIndex =
								currentIndex < filteredImages.length - 1
									? currentIndex + 1
									: 0;
							setSelectedImage(filteredImages[nextIndex]);
						}}
					>
						<motion.div whileHover={{ x: 2 }}>
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</motion.div>
					</Button>
				</motion.div>
			)}
		</>
	);
}