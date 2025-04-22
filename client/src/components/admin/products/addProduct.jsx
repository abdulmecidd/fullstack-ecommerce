"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogPortal } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

export const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="cursor-pointer">
          <Button>
            <Plus /> Add New Product
          </Button>
        </DialogTrigger>
        <div className="flex space-x-6">
          <DialogPortal className="flex w-full">
            <DialogContent className="w-full">
              <div className="w-full p-4">
                <DialogTitle className="sr-only">Add New Product</DialogTitle>
                <DialogHeader className="text-2xl font-bold">
                  Add New Product
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <label className="font-semibold" htmlFor="name">
                      Product Name
                    </label>
                    <Input
                      id="productName"
                      type="text"
                      placeholder="Enter product name"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="font-semibold" htmlFor="description">
                      Product Description
                    </label>
                    <Textarea
                      id="productDescription"
                      placeholder="Enter product description"
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="productPrice">Price</label>
                    <Input
                      id="productPrice"
                      type="number"
                      placeholder="Enter product price"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </form>
              </div>
            </DialogContent>
          </DialogPortal>
        </div>
      </Dialog>
    </div>
  );
};
