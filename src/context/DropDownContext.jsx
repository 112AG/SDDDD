import React, { createContext, useState } from 'react'

export const DropDownProvider = createContext();

function DropDownContext({ children }) {
    const [showCategory, setShowCategory] = useState(false);
    const [showInsurance, setShowInsurance] = useState(false);
    const value = {
        showCategory : showCategory,
        showInsurance : showInsurance,
        setShowCategory: setShowCategory,
        setShowInsurance : setShowInsurance,
    }
    return (
      <DropDownProvider.Provider value={value}>
        {children}
      </DropDownProvider.Provider>
    );
  };

export default DropDownContext;