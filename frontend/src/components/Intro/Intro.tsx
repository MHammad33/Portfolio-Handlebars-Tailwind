import AutoTyping from "./AutoTyping";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Intro() {
	return (
		<div
			id="home"
			className="h-[50vh] lg:h-screen bg-gradient-to-t from-indigo-200 to-red-500 relative overflow-hidden dark:from-slate-800 dark:to-slate-900"
		>
			<Navbar />
			<img
				className="absolute bottom-0 right-0 h-3/5 object-cover lg:left-0 mx-auto"
				src="/profile.png"
				alt=""
			/>
			<AutoTyping
				texts={[
					"Hello, I'm",
					"Hello, I'm a Software Developer",
					"Hello, I'm a Web Developer",
					"Hello, I'm a Mobile Developer",
					"Hello, I'm a Full Stack Developer",
				]}
				typingSpeed={100}
				backSpeed={50}
				loop={true}
			/>
			<Hero />
		</div>
	);
}
export default Intro;
