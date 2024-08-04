import project1Img from "../../assets/project-1.png";
import project2Img from "../../assets/project-2.png";
import project3Img from "../../assets/project-3.png";

function Work() {
	return (
		<div id="works" className="py-40 dark:bg-slate-900 px-5">
			<div className="container mx-auto">
				<div className="flex flex-col gap-3 items-center">
					<h1 className="text-indigo-600 font-bold 2xl:text-5xl">PORTFOLIO</h1>
					<h1 className="text-3xl dark:text-white 2xl:text-6xl">
						Works & Projects
					</h1>
					<p className="w-1/2 text-center text-gray-400 2xl:text-3xl">
						I help designers, small agencies and businesses bring their ideas to
						life. Powered by Figma, VS Code and coffee, I turn your requirements
						into a well-designed websites
					</p>
				</div>
				<div className="flex p-5 flex-wrap sm:p-0 justify-between">
					<div className="transition-all hover:scale-110 cursor-pointer w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 2xl:">
						<img src={project1Img} alt="" />
					</div>
					<div className="transition-all hover:scale-110 cursor-pointer w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 2xl:">
						<img src={project2Img} alt="" />
					</div>
					<div className="transition-all hover:scale-110 cursor-pointer w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 2xl:">
						<img src={project3Img} alt="" />
					</div>

					<div className="transition-all hover:scale-110 cursor-pointer w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 2xl:">
						<img src={project1Img} alt="" />
					</div>
					<div className="transition-all hover:scale-110 cursor-pointer w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 2xl:">
						<img src={project2Img} alt="" />
					</div>
					<div className="transition-all hover:scale-110 cursor-pointer w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 2xl:">
						<img src={project3Img} alt="" />
					</div>

					<div className="transition-all hover:scale-110 cursor-pointer w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 2xl:">
						<img src={project1Img} alt="" />
					</div>
					<div className="transition-all hover:scale-110 cursor-pointer w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 2xl:">
						<img src={project2Img} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Work;
