import { IVehicleModelResponse } from '@/types/interfaces';

const fetchDataByIDYear = async ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}): Promise<IVehicleModelResponse | undefined> => {
  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );

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
