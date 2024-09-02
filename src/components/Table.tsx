import React, { FC } from "react";
import Spinner from "./Spinner";

/* eslint-disable no-unused-vars, @typescript-eslint/no-explicit-any */
type TableProps<T> = {
  headers: Column[] | any;
  data: T[] | unknown | any;
  onSelectedRowsChange?: (selectedRowsKeys: (string | number)[]) => void;
  loading?: boolean;
};

type Column = {
  title: React.JSX.Element | string;
  dataIndex: string;
  key: string | number;
  render?: (value: any) => React.JSX.Element | React.ReactNode;
};

type DataRow = {
  key: any;
  [key: string]: any;
};

const Table: FC<TableProps<DataRow>> = ({ headers, data, loading = false }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="border-b border-mediumGray">
          {headers.map((header: any) => (
            <th
              className="text-sm text-left text-darkGray font-semibold px-4 py-2 border-r border-mediumGray last:border-none"
              key={header.key}
            >
              {header.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td className=" h-14 relative" colSpan={6}>
              <Spinner />
            </td>
          </tr>
        ) : (
          data.map((row: any) => (
            <tr key={`row-${row.key}`} className="border-b border-mediumGray">
              {headers.map((header: any) => {
                const rowValue = row[header.dataIndex];

                return (
                  <td
                    key={`${row.key}-${header.key}`}
                    className="text-left text-xs text-black leading-[18px] px-4 py-2"
                  >
                    {header.render && typeof rowValue !== "object"
                      ? header.render(rowValue)
                      : rowValue}
                  </td>
                );
              })}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
