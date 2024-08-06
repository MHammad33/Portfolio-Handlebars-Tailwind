import { Section } from "./Admin";
import EditableItem from "./EditableItem";

type SectionContentProps = {
	section: Section;
};

const SectionContent = ({ section }: SectionContentProps) => (
	<div className="bg-white p-4 rounded-lg shadow">
		<div className="mb-4">
			<h1 className="text-3xl font-bold">{section.section}</h1>
		</div>
		{Array.isArray(section.content) ? (
			<ul>
				{section.content.map((item, index) => (
					<EditableItem item={item} key={index} />
				))}
			</ul>
		) : (
			<p>{section.content}</p>
		)}
	</div>
);

export default SectionContent;
