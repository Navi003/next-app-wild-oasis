"use client";
import { createContext, useState, useContext } from "react";

const ReservationContext = createContext();

const initState = {
  from: undefined,
  to: undefined,
};

function ReservatationProvider({ children }) {
  const [range, setRange] = useState(initState);
  const resetRange = () => setRange(initState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("Context was used outside Provider");

  return context;
}

export { ReservatationProvider, useReservation };
