function Contact() {
	return (
		<div id="contact" className="dark:bg-slate-900">
			<div className="container mx-auto">
				<div className="flex flex-col gap-3 items-center">
					<h1 className="text-indigo-600 font-bold 2xl:text-5xl">CONTACT</h1>
					<h1 className="text-3xl dark:text-white 2xl:text-6xl">
						Have a Question?
					</h1>
					<p className="w-1/2 text-center text-gray-400 2xl:text-4xl">
						Do you have an idea? Let's discuss it and see what we can do
						together.
					</p>
				</div>
				<form className="mt-5 p-8 flex flex-col gap-5 items-center">
					<input
						className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white 2xl:text-4xl 2xl:w-full"
						type="text"
						placeholder="Name Surname"
					/>
					<input
						className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white 2xl:text-4xl 2xl:w-full"
						type="email"
						placeholder="Email"
					/>
					<textarea
						className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white 2xl:text-4xl 2xl:w-full"
						cols={30}
						rows={10}
						placeholder="Message..."
					></textarea>
					<button className="w-1/2 bg-indigo-600 text-white px-3 py-2 cursor-pointer rounded-md 2xl:text-5xl 2xl:w-full">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
export default Contact;
