import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "bg-[#0077B6]",
      "[&_tr]:border-none",
      className
    )}
    style={{
      backgroundColor: '#0077B6',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 119, 182, 0.2), 0 2px 4px -1px rgba(0, 119, 182, 0.1)'
    }}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "py-3 px-6 text-left align-middle font-bold text-[#FBFBFB]",
      "first:rounded-tl-lg last:rounded-tr-lg",
      "transition-all duration-200 ease-in-out",
      "hover:bg-[#0096C7]",
      "[&:has([role=checkbox])]:pr-0",
      className
    )}
    style={{
      fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#FBFBFB',
      paddingTop: '16px',
      paddingBottom: '16px',
      paddingLeft: '24px',
      paddingRight: '24px',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
      borderBottom: 'none'
    }}
    {...props}
  />
))
TableHead.displayName = "TableHead"

// Modern Dashboard Table Header Component
const ModernTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & {
    columns: string[]
  }
>(({ className, columns, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "modern-table-header",
      className
    )}
    style={{
      backgroundColor: '#0077B6',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 119, 182, 0.2), 0 2px 4px -1px rgba(0, 119, 182, 0.1)'
    }}
    {...props}
  >
    <tr className="border-none">
      {columns.map((column, index) => (
        <th
          key={column}
          className={cn(
            "h-16 px-6 py-4 text-left align-middle",
            "transition-all duration-200 ease-in-out",
            index === 0 && "rounded-tl-lg",
            index === columns.length - 1 && "rounded-tr-lg"
          )}
          style={{
            fontWeight: '700',
            color: '#FBFBFB',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Inter, Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            borderBottom: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0096C7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {column}
        </th>
      ))}
    </tr>
  </thead>
))
ModernTableHeader.displayName = "ModernTableHeader"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  ModernTableHeader,
}
