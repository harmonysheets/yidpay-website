import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SelectContext = createContext();

export const Select = ({ children, value, onValueChange, defaultValue }) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [isOpen, setIsOpen] = useState(false);
  
  const currentValue = value !== undefined ? value : internalValue;
  
  const handleValueChange = (newValue) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
    setIsOpen(false);
  };
  
  return (
    <SelectContext.Provider value={{ 
      value: currentValue, 
      onValueChange: handleValueChange,
      isOpen,
      setIsOpen 
    }}>
      <div className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = React.forwardRef(({ className = '', children, ...props }, ref) => {
  const { isOpen, setIsOpen } = useContext(SelectContext);
  
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={`flex h-10 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
});

SelectTrigger.displayName = 'SelectTrigger';

export const SelectValue = ({ placeholder }) => {
  const { value } = useContext(SelectContext);
  
  return (
    <span className={!value ? 'text-slate-500' : ''}>
      {value || placeholder}
    </span>
  );
};

export const SelectContent = ({ children, className = '' }) => {
  const { isOpen, setIsOpen } = useContext(SelectContext);
  
  if (!isOpen) return null;
  
  return (
    <>
      <div 
        className="fixed inset-0 z-40" 
        onClick={() => setIsOpen(false)}
      />
      <div className={`absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg ${className}`}>
        {children}
      </div>
    </>
  );
};

export const SelectItem = ({ value, children, className = '' }) => {
  const { onValueChange, value: selectedValue } = useContext(SelectContext);
  const isSelected = selectedValue === value;
  
  return (
    <div
      onClick={() => onValueChange(value)}
      className={`relative flex w-full cursor-pointer select-none items-center py-2 px-3 text-sm outline-none hover:bg-slate-100 ${isSelected ? 'bg-slate-50 font-medium' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
