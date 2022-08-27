

import LineChart from "./components/Test";
import { Addcannel } from "./pages/Addcannel";
import { Analytics } from "./pages/Analytics";
import { Channels } from "./pages/Channels";
import Facebookanalytics from "./pages/Facebookanalytics";
import { Facebookdata } from "./pages/Facebookdata";
import Instagramanalytics from "./pages/Instagramanalytics";
import { Mainroute } from "./pages/Mainroute";

function App() {
  return (
    <div className="App">
      {/* <Facebookanalytics /> */}
      <Instagramanalytics />
      {/* <Channels /> */}
     <Mainroute />
      {/* <Addcannel /> */}
    </div>
  );
}

export default App;
