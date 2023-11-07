/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
export default function ContactLandlord({ listing }) {
  const [landLord, setLandLord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/v1/${listing.userRef}`); 
        const data = await res.json(); 
        setLandLord(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Something went wrong while fetching data.</p>
      ) : landLord ? (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landLord.username}</span> for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'
          ></textarea>
          <Link
            to={`mailto:${landLord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message
          </Link>
        </div>
      ) : (
        <p>Landlord data not found.</p>
      )}
    </div>
  );
}
