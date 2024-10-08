import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/react-tabs-project'; //Have to go to this site and get temporary access for data to work

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

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* {btn container} */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
            <button
              key={job.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
            >
              {job.company}</button>
            );
          })}
        </div>
        {/* {job info} */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return <div key={index} className='job-desc'>
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
