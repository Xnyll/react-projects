import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest', // Setting this header to avoid preflight
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newJobs = await response.json();
      setJobs(newJobs);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className='section jobs'>
      <h2>Jobs</h2>
      <div className='jobs-center'>
        {jobs.map((job, index) => {
          return (
            <article key={job.id} className='job'>
              <h3>{job.company}</h3>
              <p>{job.title}</p>
              <FaAngleDoubleRight />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default App;
