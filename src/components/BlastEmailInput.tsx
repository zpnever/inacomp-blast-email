"use client";

import { useState } from "react";

const BlastEmailInput = () => {
	const [emails, setEmails] = useState<string>("");
	const [lomba, setLomba] = useState<string>("");

	async function handleSubmit() {
		const res = await fetch("/api/submitEmail", {
			method: "POST",
			body: JSON.stringify({ emails, lomba }),
		});

		if (res.ok) {
			console.log("email success blast");
		}
	}

	return (
		<div className="flex gap-3 flex-col items-start">
			<h1 className="text-2xl font-bold text-center">Blast Email</h1>
			<p>Input nama lomba</p>
			<input
				type="text"
				className="p-2 border-2 rounded-xl w-[60%]"
				onChange={(e) => setLomba(e.target.value)}
			/>
			<p>Input email</p>
			<textarea
				className="p-2 border-2 rounded-xl w-[60%]"
				onChange={(e) => setEmails(e.target.value)}
				name="email"
				placeholder="example: andi@gmail.com, albert@gmail.com, einsten@gmail.com"
			></textarea>
			<button onClick={() => handleSubmit()} className="">
				Submit
			</button>
		</div>
	);
};

export default BlastEmailInput;
