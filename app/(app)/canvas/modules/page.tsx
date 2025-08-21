import ModulesToolbar from '../../_components/ModulesToolbar';
import ModuleCard from '../../_components/ModuleCard';

export default function ModulesPage() {
  return (
    <div>
      <ModulesToolbar />
      <div className="p-6">
        <ModuleCard />
      </div>
    </div>
  );
}