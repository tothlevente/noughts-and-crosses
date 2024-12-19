import Footer from "./components/contents/Footer";
import Header from "./components/contents/Header";

import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="site-wrapper">
        <Header />
        <div className="content"></div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
