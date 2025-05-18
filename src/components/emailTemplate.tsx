import * as React from "react";

interface EmailTemplateProps {
	teamLeaderName?: string;
	discordLink?: string;
	senderName?: string;
	companyName?: string;
	namaLomba?: string;
}

export default function emailTemplate({
	teamLeaderName = "Peserta Lomba",
	discordLink = "https://discord.gg/WqpQT4NdQq",
	senderName = "Panitia Inacomp",
	companyName = "Inacomp",
	namaLomba = "Competitive Programming",
}: Readonly<EmailTemplateProps>) {
	const currentYear = new Date().getFullYear();

	const styles = {
		container: {
			backgroundColor: "#f5f5f5",
			fontFamily: "'Segoe UI', Arial, sans-serif",
			minHeight: "100vh",
			padding: "32px 0",
			margin: 0,
		},
		emailWrapper: {
			maxWidth: "650px",
			margin: "0 auto",
			backgroundColor: "#ffffff",
			borderRadius: "12px",
			overflow: "hidden",
			boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
		},
		header: {
			background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
			padding: "24px 32px",
			color: "#ffffff",
		},
		headerContent: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
		},
		headerTitle: {
			fontSize: "24px",
			fontWeight: "bold",
			margin: 0,
		},
		logoContainer: {
			backgroundColor: "rgba(255, 255, 255, 0.2)",
			borderRadius: "50%",
			padding: "8px",
			display: "inline-flex",
		},
		contentSection: {
			padding: "32px",
		},
		title: {
			fontSize: "24px",
			fontWeight: "bold",
			color: "#333333",
			marginBottom: "16px",
		},
		paragraph: {
			color: "#444444",
			fontSize: "16px",
			lineHeight: "1.6",
			marginBottom: "16px",
		},
		recipientName: {
			fontWeight: "500",
		},
		buttonContainer: {
			textAlign: "center",
			margin: "32px 0",
		},
		button: {
			backgroundColor: "#4f46e5",
			color: "white",
			fontWeight: "500",
			padding: "12px 24px",
			borderRadius: "8px",
			textDecoration: "none",
			display: "inline-flex",
			alignItems: "center",
			transition: "background-color 0.2s ease",
		},
		buttonIcon: {
			marginRight: "8px",
			width: "20px",
			height: "20px",
		},
		infoBox: {
			backgroundColor: "#ebf5ff",
			borderLeft: "4px solid #3b82f6",
			padding: "16px",
			marginBottom: "24px",
			borderRadius: "0 4px 4px 0",
		},
		infoBoxContent: {
			display: "flex",
			alignItems: "flex-start",
		},
		infoBoxIcon: {
			width: "20px",
			height: "20px",
			flexShrink: 0,
			color: "#3b82f6",
			marginRight: "12px",
		},
		infoBoxText: {
			fontSize: "14px",
			color: "#1e40af",
			marginTop: 0,
			marginBottom: "4px",
		},
		infoBoxSubtext: {
			fontSize: "12px",
			color: "#3b82f6",
			margin: "4px 0 0 0",
		},
		list: {
			paddingLeft: "40px",
			marginBottom: "24px",
			color: "#444444",
		},
		listItem: {
			marginBottom: "8px",
		},
		footer: {
			backgroundColor: "#f9fafb",
			padding: "24px 32px",
			borderTop: "1px solid #e5e7eb",
		},
		footerText: {
			textAlign: "center",
			color: "#6b7280",
			fontSize: "14px",
			margin: "0 0 8px 0",
		},
		copyright: {
			textAlign: "center",
			color: "#9ca3af",
			fontSize: "12px",
			margin: 0,
		},
		link: {
			color: "#3b82f6",
			textDecoration: "underline",
			fontWeight: "500",
		},
		signature: {
			marginTop: "32px",
			color: "#444444",
		},
		signatureName: {
			fontWeight: "500",
			marginBottom: "4px",
		},
		companyName: {
			color: "#6b7280",
		},
	};

	return (
		<div style={styles.container}>
			<div style={styles.emailWrapper}>
				{/* Header with gradient */}
				<div style={styles.header}>
					<div style={styles.headerContent}>
						<h1 style={styles.headerTitle}>
							{companyName} - {namaLomba}
						</h1>
					</div>
				</div>

				{/* Main content */}
				<div style={styles.contentSection}>
					<h2 style={styles.title}>
						Undangan Bergabung ke Discord Lomba {namaLomba}
					</h2>

					<p style={styles.paragraph}>
						Kepada Yth,
						<br />
						<span style={styles.recipientName}>{teamLeaderName}</span>
					</p>

					<p style={styles.paragraph}>
						Selamat! Anda telah terdaftar sebagai peserta Lomba {namaLomba}{" "}
						Inacomp. Kami mengundang Anda untuk bergabung ke server Discord
						resmi lomba. Platform ini akan menjadi sarana komunikasi utama untuk
						informasi teknis lomba, pengumuman penting, dan diskusi dengan
						panitia serta peserta lainnya.
					</p>

					<p style={styles.paragraph}>
						Mohon segera bergabung ke server Discord {namaLomba} Inacomp dengan
						mengklik tombol di bawah ini:
					</p>

					<div
						style={{
							margin: "32px 0",
							textAlign: "center",
						}}
					>
						<a href={discordLink} style={styles.button}>
							Gabung Discord Lomba
						</a>
					</div>

					<div style={styles.infoBox}>
						<div style={styles.infoBoxContent}>
							<svg
								style={styles.infoBoxIcon}
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
									clipRule="evenodd"
								/>
							</svg>
							<div>
								<p style={styles.infoBoxText}>
									Link Discord:{" "}
									<a href={discordLink} style={styles.link}>
										{discordLink}
									</a>
								</p>
								<p style={styles.infoBoxSubtext}>
									Info apapun terkait perlombaan akan melalui Discord
								</p>
							</div>
						</div>
					</div>

					<p style={styles.paragraph}>Setelah bergabung, mohon untuk:</p>

					<ul style={styles.list}>
						<li style={styles.listItem}>Memilih role</li>
						<li style={styles.listItem}>
							Membaca aturan dan informasi teknis lomba
						</li>
						<li style={styles.listItem}>
							Pastikan anggota tim anda juga join discord
						</li>
						<li style={styles.listItem}>
							Mengikuti pengumuman penting terkait jadwal dan technical meeting
						</li>
					</ul>

					<p style={styles.paragraph}>
						Jika Anda mengalami kesulitan dalam mengakses server Discord,
						silakan hubungi kami melalui email ini atau contact person:
						0851-6312-8300 (Panitia).
					</p>

					<div style={styles.signature}>
						<p style={{ ...styles.paragraph, marginBottom: "4px" }}>Salam,</p>
						<p style={styles.signatureName}>{senderName}</p>
						<p style={styles.companyName}>{companyName}</p>
					</div>
				</div>

				{/* Footer */}
				<div style={styles.footer}>
					<p
						style={{
							textAlign: "center",
							color: "#6b7280",
							fontSize: "14px",
							margin: "0 0 8px 0",
						}}
					>
						Email ini dikirim sebagai pemberitahuan resmi dari Panitia Lomba{" "}
						{namaLomba} Inacomp.
					</p>
					<p
						style={{
							textAlign: "center",
							color: "#9ca3af",
							fontSize: "12px",
							margin: 0,
						}}
					>
						&copy; {currentYear} {companyName}. Seluruh hak cipta dilindungi.
					</p>
				</div>
			</div>
		</div>
	);
}
