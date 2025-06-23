import React from 'react';
import { cn } from '@/lib/utils';
import './modern-task-list.css';

interface TaskItem {
  id: string;
  title: string;
  completed?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

interface ModernTaskListProps {
  tasks: TaskItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  onTaskClick?: (task: TaskItem) => void;
}

export const ModernTaskList: React.FC<ModernTaskListProps> = ({
  tasks,
  title,
  subtitle,
  className,
  onTaskClick
}) => {
  const handleTaskClick = (task: TaskItem) => {
    if (task.loading) return;
    
    if (task.onClick) {
      task.onClick();
    } else if (onTaskClick) {
      onTaskClick(task);
    }
  };

  return (
    <div className={cn("modern-task-container", className)}>
      {(title || subtitle) && (
        <div className="modern-task-header">
          {title && <h2 className="modern-task-title">{title}</h2>}
          {subtitle && <p className="modern-task-subtitle">{subtitle}</p>}
        </div>
      )}
      
      <div className="modern-task-list">
        {tasks.map((task) => (
          <button
            key={task.id}
            className={cn(
              "modern-task-item",
              task.completed && "completed",
              task.loading && "loading"
            )}
            onClick={() => handleTaskClick(task)}
            disabled={task.loading}
            aria-label={`Task: ${task.title}`}
            role="button"
            tabIndex={0}
          >
            <span className="modern-task-text">{task.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Example usage component with the tasks you mentioned
export const MaintenanceTaskList: React.FC = () => {
  const maintenanceTasks: TaskItem[] = [
    {
      id: '1',
      title: 'Office Furniture Repair',
      onClick: () => console.log('Office Furniture Repair clicked')
    },
    {
      id: '2',
      title: 'Monthly Cleaning Service',
      onClick: () => console.log('Monthly Cleaning Service clicked')
    },
    {
      id: '3',
      title: 'HVAC System Maintenance',
      onClick: () => console.log('HVAC System Maintenance clicked')
    },
    {
      id: '4',
      title: 'Electrical Wiring Repair',
      onClick: () => console.log('Electrical Wiring Repair clicked')
    },
    {
      id: '5',
      title: 'Replace broken window',
      onClick: () => console.log('Replace broken window clicked')
    }
  ];

  return (
    <ModernTaskList
      tasks={maintenanceTasks}
      title="Maintenance Tasks"
      subtitle="Click on any task to view details"
    />
  );
};

// Simple task list without header
export const SimpleTaskList: React.FC<{ tasks: TaskItem[] }> = ({ tasks }) => {
  return (
    <div className="modern-task-list">
      {tasks.map((task) => (
        <button
          key={task.id}
          className={cn(
            "modern-task-item",
            task.completed && "completed",
            task.loading && "loading"
          )}
          onClick={task.onClick}
          disabled={task.loading}
          aria-label={`Task: ${task.title}`}
        >
          <span className="modern-task-text">{task.title}</span>
        </button>
      ))}
    </div>
  );
};

export default ModernTaskList;
