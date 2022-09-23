import { useState } from "react";
import MenuBars from "./components/MenuBars";
import ContentContainer from "./components/ContentContainer";

function App() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div className="App">
      <MenuBars setData={setVideoList} />
      <ContentContainer data={videoList} />
    </div>
  );
}

export default App;
