import { useState } from "react";
import "./App.css";
import {
	Navbar,
	Welcome,
	Footer,
	Service,
	Transaction,
	Loader,
} from "./components/index";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen">
			<div className="gradient-bg-welcome">
				<Navbar />
				<Welcome />
			</div>
			<Service />
			<Transaction />
			<Footer />
		</div>
	);
}

export default App;
