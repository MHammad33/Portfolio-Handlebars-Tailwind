import { useState } from "react";
import Sidebar from "./SideBar";
import SectionContent from "./SectionContent";

export interface Section {
	_id: number;
	section: string;
	content: string | string[];
}

export interface SelectedSection {
	section: string;
	content: string | string[];
}

const Admin = () => {
	const [selectedSection, setSelectedSection] = useState<SelectedSection>({
		section: "Introduction",
		content: [],
	});

	const sections: Section[] = [
		{
			_id: 1,
			section: "Introduction",
			content:
				"Welcome to the admin panel. Here you can manage various sections of your application.",
		},
		{
			_id: 2,
			section: "About",
			content: "This section provides information about our company and team.",
		},
		{
			_id: 3,
			section: "Services",
			content: [
				"Web Development - Building responsive and functional websites.",
				"Mobile App Development - Creating user-friendly mobile applications.",
				"UI/UX Design - Designing intuitive and engaging user interfaces.",
			],
		},
		{
			_id: 4,
			section: "Works",
			content: [
				"Project A - A comprehensive e-commerce platform.",
				"Project B - A mobile app for on-the-go task management.",
				"Project C - A website redesign for a local business.",
			],
		},
		{
			_id: 5,
			section: "Contact",
			content:
				"Ways to get in touch with us, including contact forms and addresses.",
		},
	];

	const selectedSectionData = sections.find(
		(section) => section.section === selectedSection.section
	);

	return (
		<div className="min-h-screen flex bg-gray-100">
			<Sidebar
				sections={sections}
				selectedSection={selectedSection.section}
				onSelectSection={setSelectedSection}
			/>
			<div className="flex-1 p-4">
				{selectedSectionData && (
					<SectionContent section={selectedSectionData} />
				)}
			</div>
		</div>
	);
};

export default Admin;
