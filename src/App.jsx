import Header from "./components/Header";
import VideoSection from "./components/VideoSection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="flex px-6 pt-4 gap-6">
        <VideoSection />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
