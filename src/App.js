import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiProvider } from "./component/pages/ApiContext";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Blog from "./component/pages/Blog";
import Career from "./component/pages/Career";
import Header from "./component/pages/Header";
import Footer from "./component/pages/Footer";
import Contact from "./component/pages/Contact";
import SocialMediaMarketing from "./component/pages/SocialMediaMarketing";
import { ScrollToTop } from "./ScrollToTop";
import OffPageOptimization from "./component/pages/OffPageOptimization";
import SearchEngineOptimization from "./component/pages/SearchEngineOptimization";
import AnalyticsTracking from "./component/pages/AnalyticsTracking";
import BlogItemPage from "./component/pages/BlogItemPage";
import NotFound404 from "./component/pages/NotFound404";
import whtsappIcon from "./component/assets/icons8-whatsapp-48 (1).png";




function App() {
  return (
    <ApiProvider>
      <BrowserRouter >
        <ScrollToTop />
        <Header />
        <a
          href="https://api.whatsapp.com/send?phone=919351531335"
          className="whatsapp_float d-flex justify-content-center align-items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whtsappIcon} alt="Whatsapp Chat" />
          <p className="whtsap-side-text">
            Need Help? <strong>Chat with us</strong>{" "}
          </p>
        </a>

        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/social-media-optimization"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="/off-page-optimization"
            element={<OffPageOptimization />}
          />
          <Route path="/analytics-tracking" element={<AnalyticsTracking />} />
          <Route path="/blog/:id" element={<BlogItemPage />} />
          <Route
            path="/search-engine-optimization"
            element={<SearchEngineOptimization />}
          />
           <Route path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
