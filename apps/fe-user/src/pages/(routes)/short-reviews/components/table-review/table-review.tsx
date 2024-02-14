import { DataTableToolbar } from "@ui/components/data-table";
import { DataTable } from "@ui/components/data-table/data-table";
import MultiSelect from "@ui/components/multi-select";
import { ScrollArea } from "@ui/components/ui/scroll-area";

import Categories from "../categories";
import Types from "../types";
import { useTableReview } from "./table-review-hook";
import { optionsCategories, optionsTypes } from "../../../../../constant/multi-select";

export interface IOptionTypes {
  label: string;
  value: string;
}

export const TableReview = () => {
  const { table, handleChangeSearch, handleChangeTypesAndCategories } = useTableReview();
  return (
    <div className="container my-10">
      <div className="flex flex-wrap justify-end gap-2">
        <MultiSelect
          keyParam={"categories"}
          options={optionsCategories}
          placeholder="Categories"
          valueRenderer={(selected, _options) => {
            return (
              <ScrollArea orientation="horizontal">
                <Categories noWrap categories={selected.map((item) => item.label)} />
              </ScrollArea>
            );
          }}
          onChange={(selected) => {
            handleChangeTypesAndCategories(
              "categories",
              selected.map((item) => item.value)
            );
          }}
        />
        <MultiSelect
          keyParam={"types"}
          options={optionsTypes}
          placeholder="Types"
          valueRenderer={(selected, _options) => {
            return (
              <ScrollArea orientation="horizontal">
                <Types types={selected.map((item) => item.label)} />
              </ScrollArea>
            );
          }}
          onChange={(selected) => {
            handleChangeTypesAndCategories(
              "types",
              selected.map((item) => item.value)
            );
          }}
        />
        <DataTableToolbar table={table} onChangeSearch={handleChangeSearch} />
      </div>
      <DataTable table={table} />
    </div>
  );
};
