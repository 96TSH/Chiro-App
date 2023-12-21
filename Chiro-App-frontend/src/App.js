import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import Homepage from "./components/public pages/Homepage";
import Login from "./components/public pages/Login";
import OurTeam from "./components/public pages/OurTeam";
import Locations from "./components/public pages/Locations";
import TreatmentPlans from "./components/public pages/TreatmentPlans";
import TypesOfConditions from "./components/public pages/TypesOfConditions";
import Tutorial from "./components/public pages/Tutorial";
import Navbar from "./components/public pages/Navbar";
import FormComponent from "./components/public pages/FormComponent";
import BookingList from "./components/client pages/BookingList";
import { Context, ContextProvider } from "./context/Context";
import Profile from "./components/public pages/Profile";

function App() {
  const { isLoggedIn } = useContext(Context);

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          {!isLoggedIn && <Route path="/login" element={<Login />} />}
          <Route path="/team" element={<OurTeam />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/plans" element={<TreatmentPlans />} />
          <Route path="/conditions" element={<TypesOfConditions />} />
          {!isLoggedIn && <Route path="/trial" element={<Tutorial />} />}
          <Route path="/trials" element={<BookingList />} />
          {isLoggedIn && <Route path="/profile" element={<Profile />} />}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
