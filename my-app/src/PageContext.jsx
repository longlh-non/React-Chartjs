import React, { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("upload");
  const [selectedMetrics, setSelectedMetrics] = useState([]);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage, selectedMetrics, setSelectedMetrics }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
