import { Card, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Column, Header } from "@/types/operation";
import { FieldArrayWithId, UseFormReturn } from "react-hook-form";
import { renderField } from "./renderField";
import { Tabs } from "@/components/ui/tabs";

interface RenderTabsSectionProps {
  heads: Header[];
  columns: Column[];
  fields: FieldArrayWithId<{}>[]
  remove: (index: number) => void;
  handleAddLine: () => void;
  form: UseFormReturn<any>
}
export default function RenderTabsSection({
  form,
  columns,
  heads,
  fields,
  remove,
  handleAddLine,
}: RenderTabsSectionProps) {
  return (
    <Tabs>
      <Table className="mb-6">

        <Card>
          <TableHeader>
            <TableRow className="items-center">
              {heads.map((column, index) => (
                <TableHead key={index} className="w-96">{column.head}</TableHead>
              ))}
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((item, itemIndex) => (
              <TableRow key={item.id}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} className="h-10">
                    {renderField({
                      field: {
                        ...column.fieldConfig,
                        name: `items.${itemIndex}.${column.accessor}`,
                      },
                      form,
                      clearMessage: () => { },
                    })}
                  </TableCell>
                ))}
                <TableCell className="flex justify-start items-start">
                  <Button
                    type="button"
                    onClick={() => {
                      remove(itemIndex);
                      console.log(`Ligne ${itemIndex} supprimée`);
                    }}
                    className="mt-2 bg-thunderbird-700 hover:bg-thunderbird-950">
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <CardFooter className="justify-center mt-10">
            <Button
              type="button"
              onClick={handleAddLine}>
              Ajouter une ligne
            </Button>
          </CardFooter>
        </Card>
      </Table>
    </Tabs>
  );
}

