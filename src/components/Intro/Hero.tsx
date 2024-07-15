function Hero() {
	return (
		<div className="hidden lg:flex flex-col absolute top-0 bottom-0 m-auto right-5 bg-white p-6 h-fit w-1/3 rounded-sm gap-3 shadow-lg text-sm dark:bg-slate-900 dark:shadow-slate-800">
			<h1 className="text-4xl font-bold text-indigo-900 dark:text-white 2xl:text-7xl">
				Hi, I'm Hammad
			</h1>
			<p className="text-gray-400 2xl:text-4xl">
				Full Stack Developer and Software Engineer based in Pakistan. I build
				web applications and software solutions. I am passionate about learning
				new technologies and building cool projects. I am currently looking for
				new opportunities.{" "}
			</p>
			<a
				className="bg-indigo-600 text-white px-3 py-2 text-xl w-fit rounded-md font-semibold 2xl:text-4xl 2xl:px-3"
				href="#contact"
			>
				Hire me
			</a>
		</div>
	);
}
export default Hero;
