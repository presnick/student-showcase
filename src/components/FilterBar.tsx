import type { Project } from '@/types/project';
import styles from './FilterBar.module.css';

type FilterBarProps = {
  selected: string;
  onChange: (value: string) => void;
  projectTypes: string[];
  projects: Project[];
};

export function FilterBar({ selected, onChange, projectTypes, projects }: FilterBarProps) {
  return (
    <div className={styles['filter-bar']}>
      <div className="container">
        <div className={styles['filter-label']}>Filter by type:</div>
        <div className={styles['filter-buttons']}>
          <button
            className={`${styles['filter-btn']} ${selected === 'All' ? styles['active'] : ''}`}
            onClick={() => onChange('All')}
          >
            All Projects ({projects.length})
          </button>
          {projectTypes.map((type) => (
            <button
              key={type}
              className={`${styles['filter-btn']} ${selected === type ? styles['active'] : ''}`}
              onClick={() => onChange(type)}
            >
              {type} ({projects.filter((p) => p.projectType.includes(type)).length})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
