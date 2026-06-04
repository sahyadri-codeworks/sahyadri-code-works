"use client";

import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { useModal } from "@/components/providers/ModalProvider";

export default function StartProjectButton({ children, onClick, ...props }: ButtonProps) {
  const { openStartProject } = useModal();
  return (
    <Button 
      onClick={(e) => {
        openStartProject();
        if (onClick) onClick(e);
      }} 
      {...props}
    >
      {children}
    </Button>
  );
}
