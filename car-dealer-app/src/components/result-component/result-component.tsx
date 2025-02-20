'use client';
import { Suspense } from 'react';
import Loader from '../ui/loader/loader';
import RenderCars from '../render-cars/render-cars';
import useFetchModels from '@/hook/use-fetch-models';

const VehicleModels: React.FC<{ makeId: string; year: string }> = ({
  makeId,
  year,
}) => {
  const { data, error, loading } = useFetchModels(makeId, year);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl md:text-3xl lg:text-4xl  font-bold  text-white text-center">
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
