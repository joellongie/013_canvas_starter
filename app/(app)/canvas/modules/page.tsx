"use client"

import React, { useState } from 'react';
import ModulesToolbar from '../../_components/ModulesToolbar';
import ModuleCard from '../../_components/ModuleCard';

interface Module {
  id: string;
  title: string;
  published: boolean;
  items: any[];
}

export default function ModulesPage() {
  const [modules, setModules] = useState<Module[]>([
    {
      id: '1',
      title: 'test module',
      published: false,
      items: []
    }
  ]);

  const addModule = () => {
    const newModule: Module = {
      id: Date.now().toString(),
      title: 'New Module',
      published: false,
      items: []
    };
    setModules([...modules, newModule]);
  };

  const deleteModule = (moduleId: string) => {
    setModules(modules.filter(module => module.id !== moduleId));
  };

  return (
    <div>
      <ModulesToolbar onAddModule={addModule} />
      <div className="p-6">
        {modules.map((module) => (
          <ModuleCard key={module.id} moduleData={module} onDelete={deleteModule} />
        ))}
      </div>
    </div>
  );
}