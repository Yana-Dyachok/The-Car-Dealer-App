import { IVehicleData } from '@/types/interfaces';
import { modelYears } from '@/utils/get-years';
import { GET_MAKES_URL } from '../../../../../next.config';

export async function generateStaticParams(): Promise<
  Array<{ makeId: string; year: string }>
> {
  const makesData = await fetch(GET_MAKES_URL);
  const makes = await makesData.json();

  if (!makes.Results || makes.Results.length === 0) {
    console.error('No makes data found');
    return [];
  }

  return makes.Results.flatMap((make: IVehicleData) =>
    modelYears.map((year) => ({
      makeId: String(make.MakeId),
      year: String(year),
    })),
  );
}
