import { useEffect, useState } from "react";

interface AutoTypingComponentProps {
	texts: string[];
	typingSpeed?: number;
	backSpeed?: number;
	loop?: boolean;
}

const AutoTyping: React.FC<AutoTypingComponentProps> = ({
	texts,
	typingSpeed = 100,
	backSpeed = 50,
	loop = true,
}) => {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [delay, setDelay] = useState(typingSpeed);

	useEffect(() => {
		if (subIndex === texts[index].length + 1 && !isDeleting) {
			setTimeout(() => setIsDeleting(true), 1000);
			return;
		}

		if (subIndex === 0 && isDeleting) {
			setIsDeleting(false);
			setIndex((prev) => (prev + 1) % texts.length);
			setDelay(typingSpeed);
			return;
		}

		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
			setDelay(isDeleting ? backSpeed : typingSpeed);
		}, delay);

		return () => clearTimeout(timeout);
	}, [subIndex, isDeleting, typingSpeed, backSpeed, delay, texts, index]);

	useEffect(() => {
		if (loop || index < texts.length) {
			setText(texts[index].substring(0, subIndex));
		}
	}, [subIndex, texts, index, loop]);

	return (
		<div className="absolute top-1/3 left-5 py-3 text-lg sm:left-10 sm:text-3xl md:text-5xl md:left-1/4 lg:left-5 xl:left-48 xl:text-7xl font-bold 2xl:text-[8rem]">
			<span className="text-gray-600">{text}</span>
			<p id="text" className="text-red-500"></p>
		</div>
	);
};
export default AutoTyping;
