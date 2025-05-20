import emailTemplateZoom from "@/components/emailTemplateZoom";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

export const POST = async (req: Request) => {
	const body = await req.json();
	const namaLomba = body.lomba;
	const filterEmail = body.emails.split(",");

	for (const email of filterEmail) {
		sendOTPEmail(namaLomba, email.trim());
	}

	return NextResponse.json({ success: "" }, { status: 200 });
};

async function sendOTPEmail(namaLomba: string, teamLeaderName: string) {
	const resend = new Resend(process.env.RESEND_API_KEY);

	await resend.emails.send({
		from: "Inacomp <send@inacomp.site>",
		to: [teamLeaderName],
		subject: `Join Discord Inacomp`,
		react: React.createElement(emailTemplateZoom, {
			participantName: teamLeaderName,
			namaLomba,
		}),
		headers: {
			"Reply-To": "admin@inacomp.site",
			"X-Entity-Ref-ID": "inacomp-" + new Date().getTime(),
		},
	});
}
