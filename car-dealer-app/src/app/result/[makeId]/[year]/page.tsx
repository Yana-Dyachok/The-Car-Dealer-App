import ResultComponent from '@/components/result-component/result-component';
import { IVehicleData } from '@/types/interfaces';
import { modelYears } from '@/utils/get-years';

// eslint-disable-next-line react-refresh/only-export-components
export async function generateStaticParams() {
  const makesData = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json',
  );
  const makes = await makesData.json();

  if (!makes.Makes || makes.Makes.length === 0) {
    console.error('No makes data found');
    return [];
  }

  const staticParams = makes.Makes.flatMap((make: IVehicleData) =>
    modelYears.map((year) => ({
      params: {
        makeId: make.MakeId,
        year: year,
      },
    })),
  );

  return staticParams;
}

const ResultPage = async ({
  params,
}: {
  params: { makeId: string; year: string };
}) => {
  const { makeId, year } = params;

  return <ResultComponent makeId={makeId} year={year} />;
};

export default ResultPage;
