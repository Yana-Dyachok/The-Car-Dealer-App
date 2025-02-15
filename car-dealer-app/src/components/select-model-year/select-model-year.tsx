import { modelYears } from '@/utils/get-years';

interface SelectYearProps {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

const SelectModelYear: React.FC<SelectYearProps> = ({
  selectedYear,
  setSelectedYear,
}) => {
  return (
    <label className="block text-sm font-medium text-white">
      Model's Year:
      <select
        className="mt-1 block w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] border-2 border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {modelYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectModelYear;
