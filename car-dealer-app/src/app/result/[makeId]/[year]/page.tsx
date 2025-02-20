import ResultComponent from '@/components/result-component/result-component';
import { generateStaticParams } from './generate-static-parameters';
// eslint-disable-next-line  react-refresh/only-export-components
export { generateStaticParams };

const ResultPage = async ({
  params,
}: {
  params: Promise<{ makeId: string; year: string }>;
}) => {
  const resolvedParams = await params;

  if (!resolvedParams) {
    return <div>Error: Missing params</div>;
  }

  const { makeId, year } = resolvedParams;
  return <ResultComponent makeId={makeId} year={year} />;
};

export default ResultPage;
