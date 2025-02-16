import { IVehicleData } from '@/types/interfaces';
interface SelectVehicleMakeProps {
  makes: IVehicleData[];
  selectedMake: string;
  setSelectedMake: (mike: string) => void;
}

const SelectVehicleMake: React.FC<SelectVehicleMakeProps> = ({
  makes,
  selectedMake,
  setSelectedMake,
}) => {
  return (
    <label className="block text-sm font-medium text-white">
      Vehicle Make:
      <select
        className="mt-1 block w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] border-2 border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
      >
        <option value="">Select Make</option>
        {makes.map((make) => (
          <option key={make.MakeId} value={make.MakeName}>
            {make.MakeName}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectVehicleMake;
