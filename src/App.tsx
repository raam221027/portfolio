import './App.css'
import Header from "./components/layout/Header"
import Hero from "./components/layout/Hero"
import React from "react";
import { MacbookScroll } from "./components/ui/macbook-scroll";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import CertificatesPage from "./components/pages/CertificatesPage";
import ContactPage from "./components/pages/ContactPage";



function App() {
  const [path, setPath] = React.useState<string>(window.location.pathname || "/")

  React.useEffect(() => {
    const onPop = () => setPath(window.location.pathname || "/")
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  const navigate = (to: string) => {
    if (to === window.location.pathname) return
    window.history.pushState({}, "", to)
    setPath(to)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Header navigate={navigate} />
      {/* spacer for fixed header */}
      <div className="h-14" />

      {path === "/" && (
        <>
          <Hero />

          <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
            <MacbookScroll
              src="/mac-screenshot.jpg"
              title="My Social Media"
              showGradient
              badge={<span className="text-sm font-semibold">Demo</span>}
            />
          </div>
        </>
      )}

      {path === "/about" && <AboutPage />}
      {path === "/projects" && <ProjectsPage />}
      {path === "/certificates" && <CertificatesPage />}
      {path === "/contact" && <ContactPage />}
    </>
  )
   return (
    <div className="App">
      <Hero />
    </div>
  )
}

export default App



