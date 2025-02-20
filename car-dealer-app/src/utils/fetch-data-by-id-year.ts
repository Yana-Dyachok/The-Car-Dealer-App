import { IVehicleModelResponse } from '@/types/interfaces';
import { GET_MODELS_URL } from '../../next.config';

const fetchDataByIDYear = async ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}): Promise<IVehicleModelResponse | undefined> => {
  try {
    const response = await fetch(GET_MODELS_URL(makeId, year));

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchDataByIDYear;
