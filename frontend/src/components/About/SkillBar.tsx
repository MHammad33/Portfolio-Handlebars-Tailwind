type Props = {
	skill: string;
	level: "5/6" | "full" | "4/5";
};

const SkillBar = ({ skill, level }: Props) => {
	const widths = {
		"5/6": "w-5/6",
		full: "w-full",
		"4/5": "w-4/5",
	};

	return (
		<>
			<h2 className="text-gray-400 font-medium 2xl:text-3xl">{skill}</h2>
			<div className="w-full bg-gray-200 h-1.5 rounded-md">
				<div
					className={`bg-indigo-600 h-1.5 rounded-md ${widths[level]}`}
				></div>
			</div>
		</>
	);
};

export default SkillBar;
