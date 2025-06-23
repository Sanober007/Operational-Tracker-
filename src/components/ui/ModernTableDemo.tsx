import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  ModernTableHeader
} from "./table";
import { Badge } from "./badge";
import { Button } from "./button";
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import "./modern-table.css";

// Demo data for the table
const demoData = [
  {
    id: 1,
    title: "Office Supplies Purchase",
    category: "Procurement",
    amount: "$2,450.00",
    status: "Approved",
    date: "2024-01-15",
    queries: 2
  },
  {
    id: 2,
    title: "Marketing Campaign Budget",
    category: "Marketing",
    amount: "$15,000.00",
    status: "Pending",
    date: "2024-01-14",
    queries: 0
  },
  {
    id: 3,
    title: "IT Equipment Upgrade",
    category: "Technology",
    amount: "$8,750.00",
    status: "In Review",
    date: "2024-01-13",
    queries: 1
  },
  {
    id: 4,
    title: "Travel Expenses Q1",
    category: "Travel",
    amount: "$3,200.00",
    status: "Rejected",
    date: "2024-01-12",
    queries: 3
  }
];

const getStatusBadgeVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case 'approved':
      return 'default';
    case 'pending':
      return 'secondary';
    case 'in review':
      return 'outline';
    case 'rejected':
      return 'destructive';
    default:
      return 'secondary';
  }
};

export const ModernTableDemo: React.FC = () => {
  const columns = ["Title", "Category", "Amount", "Status", "Date", "Queries", "Actions"];

  return (
    <div className="w-full space-y-6 p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Modern Dashboard Table</h2>
        <p className="text-gray-600">
          A clean, professional table design with modern UI principles for finance and dashboard applications.
        </p>
      </div>
      
      <div className="table-container">
        <Table>
          <ModernTableHeader columns={columns} className="modern-table-header" />
          <TableBody className="modern-table-body">
            {demoData.map((item) => (
              <TableRow 
                key={item.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <TableCell className="font-medium text-gray-900 px-6 py-4">
                  {item.title}
                </TableCell>
                <TableCell className="text-gray-700 px-6 py-4">
                  <Badge variant="outline" className="font-medium">
                    {item.category}
                  </Badge>
                </TableCell>
                <TableCell className="font-semibold text-gray-900 px-6 py-4">
                  {item.amount}
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge variant={getStatusBadgeVariant(item.status)}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600 px-6 py-4">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </TableCell>
                <TableCell className="text-center px-6 py-4">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
                    item.queries > 0 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {item.queries}
                  </span>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-green-50 hover:text-green-600"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-gray-50"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="text-sm text-gray-500 space-y-2">
        <h3 className="font-semibold text-gray-700">Design Features:</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Bold, 18px font size for headers with #FBFBFB white text</li>
          <li>Deep indigo background (#4D55CC) with subtle hover effects</li>
          <li>8px rounded corners for modern appearance</li>
          <li>Soft box shadow for depth and professionalism</li>
          <li>Responsive design with ample padding</li>
          <li>Clean action buttons with hover states</li>
          <li>Status badges with contextual colors</li>
          <li>Smooth transitions and modern UI principles</li>
        </ul>
      </div>
    </div>
  );
};

export default ModernTableDemo;
