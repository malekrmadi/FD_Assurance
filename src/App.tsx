import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AssuranceAuto from "./pages/AssuranceAuto";
import AssuranceHabitation from "./pages/AssuranceHabitation";
import SantePrevoyance from "./pages/SantePrevoyance";
import ResponsabiliteCivile from "./pages/ResponsabiliteCivile";

import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/assurance-auto" element={<AssuranceAuto />} />
      <Route path="/assurance-habitation" element={<AssuranceHabitation />} />
      <Route path="/sante-prevoyance" element={<SantePrevoyance />} />
      <Route path="/responsabilite-civile" element={<ResponsabiliteCivile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
