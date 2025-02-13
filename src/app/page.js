"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/meetings')
      .then(res => res.json())
      .then(data => {
          setMeetings(data.meetings)
      }
    );
  }, []);

  return (
    <div className="p-6">
      <Head>
        <title>Zoom Meetings</title>
      </Head>
      <h1 className="text-2xl font-bold">Zoom Meetings</h1>
      <ul className="mt-4">
        {meetings.map(meeting => (
          <li key={meeting.id} className="border p-4 mt-2 rounded-lg">
            <h2 className="font-semibold">{meeting.topic}</h2>
            <p>Start Time: {new Date(meeting.start_time).toLocaleString()}</p>
            <a href={meeting.join_url} target="_blank" className="text-blue-500 underline">Join Meeting</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
