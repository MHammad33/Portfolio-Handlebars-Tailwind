type EditableItemProps = {
	item: string;
};

const EditableItem = ({ item }: EditableItemProps) => {
	return (
		<div className={`p-4 rounded shadow-sm bg-blue-100`}>
			<div className="flex justify-between items-center">
				<p>{item}</p>
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
	);
};

export default EditableItem;
