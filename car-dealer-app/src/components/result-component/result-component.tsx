'use client';

import { useEffect, useState, lazy, Suspense } from 'react';
import fetchDataByIDYear from '@/utils/fetch-data-by-id-year';
import { IVehicleModelResponse } from '@/types/interfaces';
import Loader from '../ui/loader/loader';

const RenderCars = lazy(() => import('../render-cars/render-cars'));

const VehicleModels: React.FC<{ makeId: string; year: string }> = ({
  makeId,
  year,
}) => {
  const [data, setData] = useState<IVehicleModelResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchModels = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchDataByIDYear({ makeId, year });
        if (response?.Results.length) {
          setData(response);
        } else {
          setData(null);
        }
      } catch (err) {
        setError(`Failed to fetch vehicle models, ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, [makeId, year]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold  text-white text-center">
        Vehicle Models for {year}
      </h1>
      <Suspense fallback={<Loader />}>
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && data ? (
          <RenderCars makes={data.Results} />
        ) : (
          !loading && <p className="text-gray-500">No models found.</p>
        )}
      </Suspense>
    </div>
  );
};

export default VehicleModels;
