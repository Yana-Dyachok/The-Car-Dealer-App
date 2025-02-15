'use client';
import { useEffect, useState } from 'react';
import fetchDataByIDYear from '@/utils/fetch-data-by-id-year';
import { IVehicleData } from '@/types/interfaces';

const ResultComponent: React.FC<{ makeId: string; year: string }> = ({
  makeId,
  year,
}) => {
  const [makes, setMakes] = useState<IVehicleData[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await fetchDataByIDYear({ makeId, year });
        if (data) {
          setMakes(data.Results || []);
        }
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    };
    fetchCars();
  }, [makeId, year]);

  return (
    <div>
      <h1>
        Models for {makeId} - {year}
      </h1>
      {makes.length > 0 ? (
        <ul>
          {makes.map((make, index) => (
            <li key={index}>{make.MakeName}</li>
          ))}
        </ul>
      ) : (
        <p>No models found.</p>
      )}
    </div>
  );
};

export default ResultComponent;
