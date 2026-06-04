"use client";

import React, { createContext, useContext, useState } from "react";
import StartProjectModal from "@/components/StartProjectModal";
import InternshipModal from "@/components/InternshipModal";

interface ModalContextType {
  isStartProjectOpen: boolean;
  openStartProject: () => void;
  closeStartProject: () => void;
  isInternshipOpen: boolean;
  openInternship: () => void;
  closeInternship: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false);
  const [isInternshipOpen, setIsInternshipOpen] = useState(false);

  const openStartProject = () => setIsStartProjectOpen(true);
  const closeStartProject = () => setIsStartProjectOpen(false);

  const openInternship = () => setIsInternshipOpen(true);
  const closeInternship = () => setIsInternshipOpen(false);

  return (
    <ModalContext.Provider value={{ 
      isStartProjectOpen, openStartProject, closeStartProject,
      isInternshipOpen, openInternship, closeInternship
    }}>
      {children}
      <StartProjectModal isOpen={isStartProjectOpen} onClose={closeStartProject} />
      <InternshipModal isOpen={isInternshipOpen} onClose={closeInternship} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
