import { Route, Routes } from "react-router-dom";
import Home from "./examples/lecture_07/pages/home";
import Navbar from "./examples/lecture_07/components/navbar";
import About from "./examples/lecture_07/pages/about";
import Contact from "./examples/lecture_07/pages/contact";
import Authentication from "./examples/lecture_07/pages/authentication";
import SignIn from "./examples/lecture_07/pages/signIn";
import SignUp from "./examples/lecture_07/pages/sigup";
import { useState } from "react";
import ProtectedRoute from "./examples/lecture_07/components/protectedRoute";
import Profile from "./examples/lecture_07/pages/PROFILE.JSX";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogin = () => setIsSignedIn(true)
  const handleLogout = () => setIsSignedIn(false)

  return (
    <div>
      <Navbar />

      <Routes>
        {/* Basic routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Nested routes */}
        <Route path="/auth" element={<Authentication />}>
          {/* Child routes */}
          <Route
            path="signin"
            element={
              <SignIn isSignIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
            }
          />
          <Route path="signup" element={<SignUp />} />
        </Route>
        {/* Protected Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isAuthenticated={isSignedIn}
              element={<Profile />}
            />
          }
        />
        {/* Dynamic Route */}
      </Routes>

      <button onClick={handleLogin}>Can see profile</button>
      <button onClick={handleLogout} >Can't see profile</button>
    </div>
  );
}

export default App;
