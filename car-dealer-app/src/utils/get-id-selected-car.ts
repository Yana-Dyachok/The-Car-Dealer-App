import { IVehicleData } from '@/types/interfaces';

export const getIdSelectedCar = (makeName: string, makes: IVehicleData[]) => {
  const selectedMakeData = makes.find((make) => make.MakeName === makeName);
  return selectedMakeData ? selectedMakeData.MakeId : '';
};
