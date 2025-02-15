import { IVehicleResponse } from '@/types/interfaces';

const fetchData = async (): Promise<IVehicleResponse | undefined> => {
  try {
    const response = await fetch(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export default fetchData;
