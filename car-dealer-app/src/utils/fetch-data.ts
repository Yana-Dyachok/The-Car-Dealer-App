import { IVehicleResponse } from '@/types/interfaces';
import { GET_MAKES_URL } from '../../next.config';

const fetchData = async (): Promise<IVehicleResponse | undefined> => {
  try {
    const response = await fetch(GET_MAKES_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export default fetchData;
