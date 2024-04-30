"use client";

import { ThemeProvider } from "next-themes";
import { ptBR } from 'date-fns/locale'
import { setDefaultOptions } from "date-fns";
setDefaultOptions({ locale: ptBR })

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
