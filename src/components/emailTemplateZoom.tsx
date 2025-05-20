import * as React from "react";

interface EmailTemplateProps {
	participantName?: string;
	zoomLink?: string;
	zoomID?: string;
	zoomPassword?: string;
	virtualBgLink?: string;
	meetingDate?: string;
	meetingTime?: string;
	roomOpenTime?: string;
	discordLink?: string;
	senderName?: string;
	companyName?: string;
	namaLomba?: string;
}

export default function emailTemplateZoom({
	participantName = "Peserta Lomba",
	zoomLink = "https://telkomsel.zoom.us/j/95833984890?pwd=JDP3bOqNYvr8MpuLOkyaujWJeaKwpm.1",
	zoomID = "958 3398 4890",
	zoomPassword = "011038",
	virtualBgLink = "https://drive.google.com/file/d/1wNfuQai5sDsWp_MBfh3MjJna-3GAccsK/view?usp=drive_link",
	meetingDate = "Rabu, 21 Mei 2025",
	meetingTime = "19.30 WIB",
	roomOpenTime = "19.20 WIB",
	discordLink = "https://discord.gg/zfsg6mD9",
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
		highlightBox: {
			backgroundColor: "#fffbeb",
			borderLeft: "4px solid #f59e0b",
			padding: "16px",
			marginBottom: "24px",
			borderRadius: "0 4px 4px 0",
		},
		highlightBoxContent: {
			display: "flex",
			alignItems: "flex-start",
		},
		highlightBoxIcon: {
			width: "20px",
			height: "20px",
			flexShrink: 0,
			color: "#f59e0b",
			marginRight: "12px",
		},
		highlightBoxText: {
			fontSize: "14px",
			color: "#92400e",
			marginTop: 0,
			marginBottom: "4px",
		},
		meetingDetails: {
			backgroundColor: "#f0f9ff",
			borderRadius: "8px",
			padding: "16px",
			marginBottom: "24px",
		},
		meetingDetailItem: {
			display: "flex",
			alignItems: "center",
			marginBottom: "8px",
		},
		meetingDetailIcon: {
			width: "18px",
			height: "18px",
			marginRight: "10px",
			color: "#0284c7",
		},
		meetingDetailText: {
			fontSize: "15px",
			color: "#0c4a6e",
		},
	};

	return (
		<div style={styles.container}>
			<div style={styles.emailWrapper}>
				{/* Header with gradient */}
				<div style={styles.header}>
					<div style={styles.headerContent}>
						<h1 style={styles.headerTitle}>
							{companyName} - Technical Meeting {namaLomba}
						</h1>
					</div>
				</div>

				{/* Main content */}
				<div style={styles.contentSection}>
					<h2 style={styles.title}>
						📢 Technical Meeting Penyisihan {companyName} 1.0 📢
					</h2>

					<p style={styles.paragraph}>
						Kepada Yth,
						<br />
						<span style={styles.recipientName}>{participantName}</span>
					</p>

					<p style={styles.paragraph}>Halo, Inacomp{`'`}s! 👋</p>

					<p style={styles.paragraph}>
						Kami mengingatkan bahwa Technical Meeting Penyisihan (TM) akan
						dilaksanakan pada:
					</p>

					{/* Meeting details box */}
					<div style={styles.meetingDetails}>
						<div style={styles.meetingDetailItem}>
							<svg
								style={styles.meetingDetailIcon}
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"
								/>
							</svg>
							<span style={styles.meetingDetailText}>📅 {meetingDate}</span>
						</div>
						<div style={styles.meetingDetailItem}>
							<svg
								style={styles.meetingDetailIcon}
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
									clipRule="evenodd"
								/>
							</svg>
							<span style={styles.meetingDetailText}>
								⏰ Pukul {meetingTime} (room dibuka pukul {roomOpenTime})
							</span>
						</div>
						<div style={styles.meetingDetailItem}>
							<svg
								style={styles.meetingDetailIcon}
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
									clipRule="evenodd"
								/>
							</svg>
							<span style={styles.meetingDetailText}>💻 Platform: Zoom</span>
						</div>
					</div>

					<p style={styles.paragraph}>
						Mohon segera bergabung ke Zoom Meeting dengan mengklik tombol di
						bawah ini:
					</p>

					<div
						style={{
							textAlign: "center",
							margin: "32px 0",
						}}
					>
						<a href={zoomLink} style={styles.button}>
							Gabung Zoom Meeting
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
								<p style={styles.infoBoxText}>Informasi Zoom Meeting:</p>
								<p style={styles.infoBoxSubtext}>
									🔗 Join Zoom Meeting:{" "}
									<a href={zoomLink} style={styles.link}>
										{zoomLink}
									</a>
								</p>
								<p style={styles.infoBoxSubtext}>🆔 ID Rapat: {zoomID}</p>
								<p style={styles.infoBoxSubtext}>
									🔒 Kode Sandi: {zoomPassword}
								</p>
							</div>
						</div>
					</div>

					<div style={styles.highlightBox}>
						<div style={styles.highlightBoxContent}>
							<svg
								style={styles.highlightBoxIcon}
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
								<p style={styles.highlightBoxText}>Virtual Background:</p>
								<p style={styles.infoBoxSubtext}>
									<a href={virtualBgLink} style={styles.link}>
										{virtualBgLink}
									</a>
								</p>
								<p style={styles.infoBoxSubtext}>
									Diingatkan kembali untuk menggunakan virtual background yang
									sudah dilampirkan.
								</p>
							</div>
						</div>
					</div>

					<p style={styles.paragraph}>Hal yang perlu dipersiapkan:</p>

					<ul style={styles.list}>
						<li style={styles.listItem}>
							Laptop/PC dengan kamera dan mikrofon yang berfungsi dengan baik
						</li>
						<li style={styles.listItem}>Koneksi internet yang stabil</li>
						<li style={styles.listItem}>
							Pastikan sudah mengunduh aplikasi Zoom versi terbaru
						</li>
						<li style={styles.listItem}>
							Persiapkan pertanyaan jika ada hal yang ingin ditanyakan
						</li>
						<li style={styles.listItem}>
							Bergabunglah tepat waktu untuk menghindari ketinggalan informasi
							penting
						</li>
					</ul>

					<p style={styles.paragraph}>
						📢 Untuk informasi lebih lanjut dan sesi tanya-jawab, silakan
						bergabung melalui Discord kami:
					</p>

					<div style={styles.infoBox}>
						<div style={styles.infoBoxContent}>
							<svg
								style={styles.infoBoxIcon}
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
							</svg>
							<div>
								<p style={styles.infoBoxText}>
									Discord {companyName} 1.0:{" "}
									<a href={discordLink} style={styles.link}>
										{discordLink}
									</a>
								</p>
							</div>
						</div>
					</div>

					<p style={styles.paragraph}>
						Jika Anda mengalami kesulitan dalam mengakses Zoom Meeting, silakan
						hubungi kami melalui email ini atau contact person panitia.
					</p>

					<div style={styles.signature}>
						<p style={{ ...styles.paragraph, marginBottom: "4px" }}>
							Terimakasih 🔥
						</p>
						<p style={styles.signatureName}>Hormat kami,</p>
						<p style={styles.signatureName}>{senderName}</p>
						<p style={styles.companyName}>{companyName} 1.0</p>
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
						Email ini dikirim sebagai pemberitahuan resmi dari Panitia{" "}
						{companyName} 1.0 {namaLomba}.
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
