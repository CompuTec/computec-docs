import React, { useEffect, useState } from "react";
import Heading from "../theme/Heading";

const ReleaseInfo = ({ url, name }) => {
	const [releaseData, setReleaseData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchReleaseData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Failed to fetch release data");
				}
				const data = await response.json();
				console.log(data);
				setReleaseData(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchReleaseData();
	}, [url]);

	if (loading) return <p>Loading release information...</p>;
	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<>
			<Heading as="h2">Official Releases</Heading>
			<table>
				<tr>
					<th>Version</th>
					<th>Release Date</th>
					<th>Installer</th>
				</tr>
				{releaseData.versions
					.filter((data) => data.release_type === "stable")
					.map((data) => (
						<tr key={data.version}>
							<td>{data.version}</td>
							<td>{data.release_date}</td>
							<td>
								<a
									href={releaseData.download_template_url.replaceAll(
										"{version}",
										data.version
									)}
								>
									Download
								</a>
							</td>
						</tr>
					))}
			</table>

			<Heading as="h2">Release Candidates</Heading>
			<table>
				<tr>
					<th>Version</th>
					<th>Release Date</th>
					<th>Installer</th>
				</tr>
				{releaseData.versions
					.filter((data) => data.release_type !== "stable")
					.map((data) => (
						<tr key={data.version}>
							<td>{data.version}</td>
							<td>{data.release_date}</td>
							<td>
								<a
									href={releaseData.download_template_url.replaceAll(
										"{version}",
										data.version
									)}
								>
									Download
								</a>
							</td>
						</tr>
					))}
			</table>
		</>
	);
};

export default ReleaseInfo;
