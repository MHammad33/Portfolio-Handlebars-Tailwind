import EditableItem from "./EditableItem";

const SectionContent = ({ section }) => (
	<div className="bg-white p-4 rounded-lg shadow">
		<div className="mb-4">
			<h1 className="text-3xl font-bold">{section.section}</h1>
		</div>
		{section.section === "Services" || section.section === "Works" ? (
			<div className="space-y-4">
				{section.content.map((item, index) => (
					<EditableItem key={index} item={item} />
				))}
			</div>
		) : (
			<p className="mb-2">{section.content}</p>
		)}
	</div>
);

export default SectionContent;
