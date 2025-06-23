import React from 'react';
import { cn } from '@/lib/utils';
import './premium-item-list.css';

interface ItemData {
  id: string;
  name: string;
  completed?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

interface PremiumItemListProps {
  items: ItemData[];
  title?: string;
  subtitle?: string;
  className?: string;
  onItemClick?: (item: ItemData) => void;
}

export const PremiumItemList: React.FC<PremiumItemListProps> = ({
  items,
  title,
  subtitle,
  className,
  onItemClick
}) => {
  const handleItemClick = (item: ItemData) => {
    if (item.loading) return;
    
    if (item.onClick) {
      item.onClick();
    } else if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <div className={cn("premium-item-container", className)}>
      {(title || subtitle) && (
        <div className="premium-item-header">
          {title && <h2 className="premium-item-title">{title}</h2>}
          {subtitle && <p className="premium-item-subtitle">{subtitle}</p>}
        </div>
      )}
      
      <div className="premium-item-list">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              "premium-item-row",
              item.completed && "completed",
              item.loading && "loading"
            )}
            onClick={() => handleItemClick(item)}
            disabled={item.loading}
            aria-label={`Item: ${item.name}`}
            role="button"
            tabIndex={0}
          >
            <span className="premium-item-text">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Stock-specific component with the items you mentioned
export const StockItemList: React.FC = () => {
  const stockItems: ItemData[] = [
    {
      id: '1',
      name: 'Office Paper A4',
      onClick: () => console.log('Office Paper A4 clicked')
    },
    {
      id: '2',
      name: 'Printer Ink Cartridges',
      onClick: () => console.log('Printer Ink Cartridges clicked')
    },
    {
      id: '3',
      name: 'Cleaning Supplies',
      onClick: () => console.log('Cleaning Supplies clicked')
    },
    {
      id: '4',
      name: 'Light Bulbs',
      onClick: () => console.log('Light Bulbs clicked')
    }
  ];

  return (
    <PremiumItemList
      items={stockItems}
      title="Stock Items"
      subtitle="Click on any item to view details"
    />
  );
};

// Simple item list without header for direct integration
export const SimpleStockList: React.FC<{ items: ItemData[] }> = ({ items }) => {
  return (
    <div className="stock-item-list">
      {items.map((item) => (
        <button
          key={item.id}
          className={cn(
            "stock-item-row",
            item.completed && "completed",
            item.loading && "loading"
          )}
          onClick={item.onClick}
          disabled={item.loading}
          aria-label={`Stock item: ${item.name}`}
        >
          <span className="stock-item-name">{item.name}</span>
        </button>
      ))}
    </div>
  );
};

// Enhanced table row component for existing table integration
export const PremiumTableRow: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className }) => {
  return (
    <tr
      className={cn(
        "stock-item-row",
        "cursor-pointer transition-all duration-300 ease-in-out",
        className
      )}
      onClick={onClick}
      style={{
        backgroundColor: '#48CAE4',
        color: '#FBFBFB',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '8px',
        display: 'table-row'
      }}
    >
      {children}
    </tr>
  );
};

export default PremiumItemList;
