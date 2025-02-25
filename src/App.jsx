import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./componants/layouts/Layout";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
