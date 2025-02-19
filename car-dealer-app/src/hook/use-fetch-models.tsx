import { useEffect, useState } from 'react';
import { IVehicleModelResponse } from '@/types/interfaces';
import fetchDataByIDYear from '@/utils/fetch-data-by-id-year';

const useFetchModels = (makeId: string, year: string) => {
  const [data, setData] = useState<IVehicleModelResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    (async () => {
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
    })();
  }, [makeId, year]);
  return { data, error, loading };
};

export default useFetchModels;
