
import ReduxProvider from "./ReduxProvider";
import { ThemeProvider } from "./theme-provider";

const ProviderContainer = ({ children }: { children: React.ReactNode }) => {
  return (

      <ReduxProvider>
          {children}
      </ReduxProvider>
  );
};

export default ProviderContainer;
