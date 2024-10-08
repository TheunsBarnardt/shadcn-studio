import React, { useTransition } from "react";
import { HiSaveAs } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";

import { UpdateFormContent } from "@/actions/form";
import useDesigner from "../hooks/useDesigner";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";

const SaveFormBtn = ({ id }: { id: number }) => {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElements);

      toast({
        title: "Success",
        description: "Your form has been saved!!!!!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant={"outline"}
      className="gap-2"
      disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
    >
      <HiSaveAs className="w-4 h-4" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
};

export default SaveFormBtn;
