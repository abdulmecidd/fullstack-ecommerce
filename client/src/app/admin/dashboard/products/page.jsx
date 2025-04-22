import { AddProduct } from "@/components/admin/products/addProduct";
import ListProducts from "@/components/admin/products/listProducts";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Products() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <AddProduct />
      </div>
      <ListProducts />
    </>
  );
}
