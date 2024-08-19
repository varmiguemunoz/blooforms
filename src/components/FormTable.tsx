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
  forms: {
    id: string | number;
    title: string;
    form_value: string;
    form_name: string;
  }[];
}

export default function FormTable({ forms }: FormTableProps) {
  return (
    <Table>
      {forms?.map((item) => (
        <>
          <TableCaption>{item.title}</TableCaption>
          <TableHeader>
            <TableRow key={item.id}>
              <TableHead className="w-[100px]">{item.form_name}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">{item.form_value}</TableCell>
            </TableRow>
          </TableBody>
        </>
      ))}
    </Table>
  );
}
