import { IVehicleResponse } from '@/types/interfaces';

const fetchDataByIDYear = async ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}): Promise<IVehicleResponse | undefined> => {
  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: IVehicleResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return undefined;
  }
};

export default fetchDataByIDYear;
