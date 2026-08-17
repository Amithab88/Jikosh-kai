import "./App.css";
import {
  Navbar,
  Hero,
  Profile,
  Ikigai,
  Toolkit,
  CaseStudies,
  Journey,
  Contact,
  Footer,
} from "./components";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Ikigai />
        <Toolkit />
        <CaseStudies />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}