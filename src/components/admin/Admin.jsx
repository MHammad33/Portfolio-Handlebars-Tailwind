import React, { useState } from "react";

const Admin = () => {
	const [selectedSection, setSelectedSection] = useState("Introduction");

	const sections = [
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
		(section) => section.section === selectedSection
	);

	return (
		<div className="min-h-screen flex bg-gray-100">
			{/* Sidebar */}
			<div className="w-60 bg-gray-800 text-white flex flex-col">
				<div className="p-4 text-xl font-bold">Admin Panel</div>
				<nav className="flex-1 px-2">
					<ul>
						{sections.map((section) => (
							<li key={section._id} className="mb-1">
								<button
									className={`block w-full text-left p-2 rounded ${
										selectedSection === section.section
											? "bg-gray-700"
											: "hover:bg-gray-700"
									}`}
									onClick={() => setSelectedSection(section.section)}
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

			{/* Main Content */}
			<div className="flex-1 p-4">
				<div className="mb-4">
					<h1 className="text-3xl font-bold">{selectedSectionData.section}</h1>
				</div>
				<div className="bg-white p-4 rounded-lg shadow">
					{selectedSectionData.section === "Services" ? (
						<div className="space-y-4">
							{selectedSectionData.content.map((service, index) => (
								<div key={index} className="bg-blue-100 p-4 rounded shadow-sm">
									<div className="flex justify-between items-center">
										<p>{service}</p>
										<div className="flex space-x-1">
											<button className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600">
												Edit
											</button>
											<button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">
												Delete
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					) : selectedSectionData.section === "Works" ? (
						<div className="space-y-4">
							{selectedSectionData.content.map((work, index) => (
								<div
									key={index}
									className="bg-purple-100 p-4 rounded shadow-sm"
								>
									<div className="flex justify-between items-center">
										<p>{work}</p>
										<div className="flex space-x-1">
											<button className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600">
												Edit
											</button>
											<button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">
												Delete
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<p className="mb-2">{selectedSectionData.content}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Admin;
