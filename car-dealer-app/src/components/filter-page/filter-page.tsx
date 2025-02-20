'use client';
import { useState, Suspense, use } from 'react';
import fetchData from '@/utils/fetch-data';
import { IVehicleData } from '@/types/interfaces';
import { getIdSelectedCar } from '@/utils/get-id-selected-car';
import SelectModelYear from '../select-model-year/select-model-year';
import Loader from '../ui/loader/loader';
import Button from '../ui/button';
import SelectVehicleMake from '../select-vehicle-make/select-vehicle-make';

const fetchCars = (async () => {
  try {
    const data = await fetchData();
    return data ? data.Results : [];
  } catch (error) {
    console.error('Error fetching vehicle makes:', error);
    return [];
  }
})();

const FilterPage = () => {
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const makes: IVehicleData[] = use(fetchCars);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Select vehicle make and model&apos;s year
      </h1>

      <Suspense fallback={<Loader />}>
        <SelectVehicleMake
          makes={makes}
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
        />
      </Suspense>
      <SelectModelYear
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      <Button
        to={`/result/${getIdSelectedCar(selectedMake, makes)}/${selectedYear}`}
        disabled={!selectedMake || !selectedYear}
      >
        Next
      </Button>
    </div>
  );
};

export default FilterPage;
