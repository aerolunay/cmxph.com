import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./routes/homePage";
import CareersJobs from "./routes/CareersJobs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers/jobs" element={<CareersJobs />} />
      </Routes>
    </Router>
  );
}

export default App;