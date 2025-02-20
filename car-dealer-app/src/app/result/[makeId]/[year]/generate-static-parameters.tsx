import { IVehicleData } from '@/types/interfaces';
import { modelYears } from '@/utils/get-years';

export async function generateStaticParams(): Promise<
  Array<{ makeId: string; year: string }>
> {
  const makesData = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json',
  );
  const makes = await makesData.json();

  if (!makes.Makes || makes.Makes.length === 0) {
    console.error('No makes data found');
    return [];
  }

  return makes.Makes.flatMap((make: IVehicleData) =>
    modelYears.map((year) => ({
      makeId: String(make.MakeId),
      year: String(year),
    })),
  );
}
