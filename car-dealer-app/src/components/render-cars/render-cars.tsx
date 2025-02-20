import { IVehicleModel } from '@/types/interfaces';
interface RenderCarsProps {
  makes: IVehicleModel[];
}

const RenderCars: React.FC<RenderCarsProps> = ({ makes }) => {
  return (
    <ul className="space-y-2">
      {makes.map((model, i) => (
        <li
          key={`${model.Model_ID}-${i}`}
          className="p-3 bg-gray-100 rounded-lg shadow-sm"
        >
          🚗 {model.Make_Name} - {model.Model_Name}
        </li>
      ))}
    </ul>
  );
};

export default RenderCars;
