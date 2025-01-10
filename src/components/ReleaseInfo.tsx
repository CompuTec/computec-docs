import React, { useEffect, useState } from 'react';

const ReleaseInfo = ({ url }) => {
  const [releaseData, setReleaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReleaseData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch release data');
        }
        const data = await response.json();
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
    console.error(error)
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {releaseData?.releases.map((release, index) => (
          <li key={index}>
            <strong>{release.version}</strong> - {release.release_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReleaseInfo;
