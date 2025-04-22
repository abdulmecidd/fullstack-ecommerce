"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "./dataTable";
import { columns } from "./columns";
import { getAllProducts } from "../../../../actions/actions"; // kısaltılmış import yolu

export default function ListProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const products = await getAllProducts();
        setData(products);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <Card className="w-full mt-4 rounded-sm">
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}
