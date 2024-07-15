import SkillBar from "./SkillBar";
import about from "../../assets/about.png";
import dots from "../../assets/dots.png";

function About() {
	return (
		<div id="about" className="px-10 dark:bg-slate-900">
			<div className="container 2xl:w-full mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20 2xl:items-stretch">
				<div className="relative 2xl:w-2/6">
					<img
						className="absolute left-0 top-0 h-1/4 -z-10 2xl:h-2"
						src={dots}
						alt="Dots"
					/>
					<div className="h-full rounded-full overflow-hidden">
						<img
							className="2xl:w-[35rem] 2xl:h-[25rem]"
							src={about}
							alt="About me"
						/>
					</div>
				</div>

				<div className="my-auto flex flex-col gap-3 2xl:w-4/6">
					<h1 className="text-indigo-600 font-bold uppercase 2xl:text-5xl">
						About me
					</h1>
					<h1 className="font-medium text-3xl dark:text-white 2xl:text-4xl">
						Better Design
					</h1>
					<h1 className="font-medium text-3xl dark:text-white 2xl:text-4xl">
						Better Experience
					</h1>
					<p className="text-gray-400 2xl:text-4xl">
						I design and build digital products. I'm also a multi-disciplinary
						maker with over 10 years of experiences in wide range of design
						disciplines.
					</p>

					<SkillBar skill="HTML" level="5/6" />
					<SkillBar skill="JavaScript" level="full" />
					<SkillBar skill="React" level="4/5" />
					<SkillBar skill="Node.js" level="4/5" />
				</div>
			</div>
		</div>
	);
}
export default About;
