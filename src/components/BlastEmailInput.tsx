"use client";

import { useState } from "react";

const BlastEmailInput = () => {
	const [emails, setEmails] = useState<string>("");
	const [lomba, setLomba] = useState<string>("");

	async function handleSubmitDc() {
		const res = await fetch("/api/submitDc", {
			method: "POST",
			body: JSON.stringify({ emails, lomba }),
		});

		if (res.ok) {
			alert("Discord berhasil di BLAST");
		}
	}

	async function handleSubmitZoom() {
		const res = await fetch("/api/submitZoom", {
			method: "POST",
			body: JSON.stringify({ emails, lomba }),
		});

		if (res.ok) {
			alert("Zoom TM berhasil di BLAST");
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
			<div className="flex gap-2">
				<button
					onClick={() => handleSubmitDc()}
					className="border-1 border-black p-2 cursor-pointer hover:bg-gray-100"
				>
					Blast Discord
				</button>
				<button
					onClick={() => handleSubmitZoom()}
					className="border-1 border-black p-2 cursor-pointer hover:bg-gray-100"
				>
					Blast Zoom TM
				</button>
			</div>
		</div>
	);
};

export default BlastEmailInput;
