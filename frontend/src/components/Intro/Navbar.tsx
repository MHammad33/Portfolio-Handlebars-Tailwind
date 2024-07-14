function Navbar() {
	return (
		<nav className="z-10 w-full px-5 fixed top-0 bg-white dark:bg-slate-900">
			<div className="container mx-auto py-5 flex justify-between items-center">
				<div className="flex items-center gap-2">
					<img
						className="h-8 w-8 2xl:h-12 2xl:w-12"
						src="../assets/logo.png"
						alt="Profile"
					/>
					<span className="font-bold text-2xl text-indigo-900 dark:text-white 2xl:text-5xl">
						Portfit.
					</span>
				</div>
				<ul className="hidden md:flex dark:text-gray-100 space-x-10 text-gray-600 font-bold text-sm uppercase 2xl:text-3xl">
					<li className="hover:text-gray-500">
						<a href="#home">homepage</a>
					</li>
					<li className="hover:text-gray-500">
						<a href="#about">about me</a>
					</li>
					<li className="hover:text-gray-500">
						<a href="#services">services</a>
					</li>
					<li className="hover:text-gray-500">
						<a href="#works">works</a>
					</li>
					<li className="hover:text-gray-500">
						<a href="#contact">contact</a>
					</li>
				</ul>
				<img
					id="moon"
					className="hidden md:block w-5 cursor-pointer"
					src="./img/moon.png"
					alt=""
				/>
				<div id="hamburger" className="space-y-1 md:hidden z-20">
					<div className="w-6 h-0.5 bg-black dark:bg-gray-100"></div>
					<div className="w-6 h-0.5 bg-black dark:bg-gray-100"></div>
					<div className="w-6 h-0.5 bg-black dark:bg-gray-100"></div>
				</div>
				<ul
					id="menu"
					className="hidden bg-indigo-900 absolute top-0 left-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center uppercase"
				>
					<li className="hLinks">
						<a href="#home">home</a>
					</li>
					<li className="hLinks">
						<a href="#about">about me</a>
					</li>
					<li className="hLinks">
						<a href="#services">services</a>
					</li>
					<li className="hLinks">
						<a href="#works">works</a>
					</li>
					<li className="hLinks">
						<a href="#contact">contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Navbar;
