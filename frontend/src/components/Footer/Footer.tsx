import FacebookImg from "../../assets/facebook.png";
import InstagramImg from "../../assets/instagram.png";
import LinkedInImg from "../../assets/linkedin.png";
import TwitterImg from "../../assets/twitter.png";
import logo from "../../assets/logo.png";

function Footer() {
	return (
		<div className="w-full bg-gray-800 px-3">
			<div className="container mx-auto py-5 flex justify-between items-center">
				<div className="flex items-center gap-2">
					<img className="h-8 w-8" src={logo} alt="Profile" />
					<span className="font-bold text-2xl text-white 2xl:text-5xl">
						Portfit.
					</span>
				</div>

				<span className="hidden md:block font-medium text-white 2xl:text-4xl">
					© 2023 Portfit. Made with ♥️ by M Hammad Afzal.
				</span>

				<div className="flex gap-2">
					<img
						className="w-4 cursor-pointer 2xl:w-full 2xl:px-3"
						src={FacebookImg}
						alt="Facebook"
					/>
					<img
						className="w-4 cursor-pointer 2xl:w-full 2xl:px-3"
						src={InstagramImg}
						alt="Instagram"
					/>
					<img
						className="w-4 cursor-pointer 2xl:w-full 2xl:px-3"
						src={LinkedInImg}
						alt="LinekdIn"
					/>
					<img
						className="w-4 cursor-pointer 2xl:w-full 2xl:px-3"
						src={TwitterImg}
						alt="Twitter"
					/>
				</div>
			</div>
		</div>
	);
}
export default Footer;
