// src/routes.js
import Home from "./pages/Home";
import About from "./pages/About";
import Islam from "./pages/Islam";
import Christianity from "./pages/Christianity";
import Judaism from "./pages/Judaism";
import Atheism from "./pages/Atheism";
import Agnosticism from "./pages/Agnosticism";
import Darwinism from "./pages/Darwinism";
import Hinduism from "./pages/Hinduism";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/Tos";
import IslamComponent1 from "./components/Islam/quran/IslamComponent1";
import IslamComponent2 from "./components/Islam/quran/IslamComponent2";
import IslamComponent3 from "./components/Islam/hadith/IslamComponent3";
import DarwinComponent1 from "./components/Darwinism/DarwinComponent1";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/islam", element: <Islam /> },
  { path: "/christianity", element: <Christianity /> },
  { path: "/judaism", element: <Judaism /> },
  { path: "/atheism", element: <Atheism /> },
  { path: "/agnosticism", element: <Agnosticism /> },
  { path: "/darwinism", element: <Darwinism /> },
  { path: "/hinduism", element: <Hinduism /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/contact-us", element: <Contact /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  { path: "/islam/quran/1", element: <IslamComponent1 /> },
  { path: "/islam/quran/2", element: <IslamComponent2 /> },
  { path: "/islam/hadith/1", element: <IslamComponent3 /> },
  { path: "/darwinism/dn-vs-ct/1", element: <DarwinComponent1 /> },
  { path: "*", element: <Home /> },
];

export default routes;
