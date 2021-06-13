import React from "react";
import "./Scripts.scss";
import FirstScript from "./FirstScript";
import SecondScript from "./SecondScript";
function ScriptPage() {
	return (
		<div className="scriptPage">
			<div className="scriptForm">
				<h1 style={{ textDecoration: "underline" }}>Senaryolarım</h1>
				<br />
				<br />
				<FirstScript />
				<hr style={{ height: "2px", backgroundColor: "white" }} />
				<br />
				<SecondScript />
				<hr style={{ height: "2px", backgroundColor: "white" }} />
				<br />
			</div>
		</div>
	);
}

export default ScriptPage;
