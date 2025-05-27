// src/routes.js
import Home from "./pages/Home";
import About from "./pages/About";
import Islam from "./pages/Islam";
import Christianity from "./pages/Christianity";
import Judaism from "./pages/Judaism";
import Atheism from "./pages/Atheism";
import Buddhism from "./pages/Buddhism";
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
import AgnosticComponent1 from "./components/Agnosticism/AgnosticComponent1";
import Misc from "./pages/Misc";
import MiscComponent1 from "./components/Miscellaneous/MiscComponent1";
import Articles from "./pages/Articles";
import MiscComponent2 from "./components/Miscellaneous/MiscComponent2";
import WomenComponent1 from "./components/Islam/women/WomenComponent1";
import MiscComponent3 from "./components/Miscellaneous/MiscComponent3";
import AtheistComponent1 from "./components/Atheism/AtheistComponent1";
import AtheistComponent2 from "./components/Atheism/AtheistComponent2";
import AtheistComponent3 from "./components/Atheism/AtheistComponent3";
import ChristianComponent1 from "./components/Christianity/ChristianComponent1";
import Islamcomponent4 from "./components/Islam/kindness/Islamcomponent4";
import ChristianComponent2 from "./components/Christianity/ChristianComponent2";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/articles", element: <Articles /> },
  { path: "/islam", element: <Islam /> },
  { path: "/christianity", element: <Christianity /> },
  { path: "/judaism", element: <Judaism /> },
  { path: "/buddhism", element: <Buddhism /> },
  { path: "/atheism", element: <Atheism /> },
  { path: "/agnosticism", element: <Agnosticism /> },
  { path: "/darwinism", element: <Darwinism /> },
  { path: "/hinduism", element: <Hinduism /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/contact-us", element: <Contact /> },
  { path: "/misc", element: <Misc /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  { path: "/islam/quran/1", element: <IslamComponent1 /> },
  { path: "/islam/quran/2", element: <IslamComponent2 /> },
  { path: "/islam/hadith/1", element: <IslamComponent3 /> },
  { path: "/islam/wmn/1", element: <WomenComponent1 /> },
  { path: "/islam/kii/1", element: <Islamcomponent4 /> },
  { path: "/atheism/ara/1", element: <AtheistComponent1 /> },
  { path: "/atheism/pfg/1", element: <AtheistComponent2 /> },
  { path: "/atheism/mai/1", element: <AtheistComponent3 /> },
  { path: "/agnosticism/as-th-de/1", element: <AgnosticComponent1 /> },
  { path: "/christianity/tc/1", element: <ChristianComponent1 /> },
  { path: "/christianity/bible/1", element: <ChristianComponent2 /> },
  { path: "https://defenseofislam.github.io/web/christianity/bible/1", element: <ChristianComponent2 /> },
  { path: "/darwinism/dn-vs-ct/1", element: <DarwinComponent1 /> },
  { path: "/misc/gt/1", element: <MiscComponent1 /> },
  { path: "/misc/gt/2", element: <MiscComponent2 /> },
  { path: "/misc/mri/1", element: <MiscComponent3 /> },
  { path: "*", element: <Home /> },
];

export default routes;
