import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navLinks = [
		{ href: "#home", label: "Home" },
		{ href: "#programs", label: "Programs" },
		{ href: "#about", label: "About" },
		{ href: "#gallery", label: "Gallery" },
		{ href: "#testimonials", label: "Reviews" },
		{ href: "#contact", label: "Contact" },
	];

	const handleNavClick = (href: string) => {
		setIsMobileMenuOpen(false);
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="bg-white shadow-sm sticky top-0 z-[90] w-full">
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden">
							<img
								src="/logo.jpeg"
								alt="S.R. Future Classes Logo"
								className="w-8 h-8 object-contain rounded"
							/>
						</div>
						<div>
							<h1 className="text-xl font-bold text-slate-800">
								S.R Future Classes
							</h1>
							<p className="text-xs text-slate-500">
								Premium Coaching Institute
							</p>
						</div>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						{navLinks.map((link) => (
							<button
								key={link.href}
								onClick={() => handleNavClick(link.href)}
								className="text-slate-600 hover:text-primary transition-colors"
							>
								{link.label}
							</button>
						))}
					</nav>

					{/* Contact Button & Hamburger */}
					<div className="flex items-center space-x-3">
						<Button
							asChild
							className="hidden sm:inline-flex btn-primary"
							size="sm"
						>
							<a href="tel:+919140079941">
								<Phone className="mr-2 h-4 w-4" />
								Call Now
							</a>
						</Button>

						<Button
							variant="ghost"
							size="sm"
							className="md:hidden"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? <X /> : <Menu />}
						</Button>
					</div>
				</div>

				{/* Mobile Dropdown Menu */}
				{isMobileMenuOpen && (
					<div className="absolute left-0 right-0 top-full bg-white border-t border-slate-200 shadow-md md:hidden">
						<nav className="flex flex-col space-y-2 p-4">
							{navLinks.map((link) => (
								<button
									key={link.href}
									onClick={() => handleNavClick(link.href)}
									className="text-left px-4 py-2 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
								>
									{link.label}
								</button>
							))}
							<Button asChild className="mx-4 mt-2">
								<a href="tel:+919876543210">
									<Phone className="mr-2 h-4 w-4" />
									Call Now
								</a>
							</Button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
