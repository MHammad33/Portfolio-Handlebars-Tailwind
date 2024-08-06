import { Section, SelectedSection } from "./Admin";

interface SidebarProps {
	sections: Section[];
	selectedSection: string;
	onSelectSection: (section: SelectedSection) => void;
}

const Sidebar = ({
	sections,
	selectedSection,
	onSelectSection,
}: SidebarProps) => (
	<div className="w-60 bg-gray-800 text-white flex flex-col">
		<div className="p-4 text-xl font-bold">Admin Panel</div>
		<nav className="flex-1 px-2">
			<ul>
				{sections?.map((section) => (
					<li key={section._id} className="mb-1">
						<button
							className={`block w-full text-left p-2 rounded ${
								selectedSection === section.section
									? "bg-gray-700"
									: "hover:bg-gray-700"
							}`}
							onClick={() =>
								onSelectSection({
									content: section.content,
									section: section.section,
								})
							}
						>
							{section.section}
						</button>
					</li>
				))}
			</ul>
		</nav>
		<div className="p-2">
			<button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
				Add Section
			</button>
		</div>
	</div>
);

export default Sidebar;
