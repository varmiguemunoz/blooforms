import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FormTableProps {
  header: string;
  title: string;
  forms: string;
}

export default function FormTable({ header, title, forms }: FormTableProps) {
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          {header?.map((item) => (
            <TableHead className="w-[100px]">{item.form_name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {forms?.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.form_value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
