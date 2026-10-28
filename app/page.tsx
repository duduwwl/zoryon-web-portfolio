import { HomeExperience } from '../components/WatermelonZoryon';
import { getPortfolioProjects } from '../lib/database';

export const dynamic = 'force-dynamic';

export default async function Home() {
  return <HomeExperience projects={await getPortfolioProjects()} />;
}
