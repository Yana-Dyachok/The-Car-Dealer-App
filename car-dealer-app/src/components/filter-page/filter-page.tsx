'use client';
import { useEffect, useState, Suspense, lazy } from 'react';
import fetchData from '@/utils/fetch-data';
import { IVehicleData } from '@/types/interfaces';
const Button = lazy(() => import('../ui/button'));

const FilterPage = () => {
  const [makes, setMakes] = useState<IVehicleData[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => (2015 + i).toString(),
  );

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await fetchData();
        if (data) {
          setMakes(data.Results || []);
        }
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <label>
        Select Vehicle Make:
        <select
          className="border p-2"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
        >
          <option value="">Select Make</option>
          {makes.map((make) => (
            <option key={make.MakeId} value={make.MakeName}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </label>

      <label>
        Select Model Year:
        <select
          className="border p-2"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <Suspense fallback={<div>Loading Button...</div>}>
        <Button
          to={`/result/${selectedMake}/${selectedYear}`}
          disabled={!selectedMake || !selectedYear}
        >
          Next
        </Button>
      </Suspense>
    </div>
  );
};

export default FilterPage;
