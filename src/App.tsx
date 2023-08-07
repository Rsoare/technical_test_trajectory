import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Router } from "./routes";
import { GlobalStyles } from "./styles/global";
import { GlobalTypography } from "./styles/Typography";
import { WaetherProvide } from "./contexts/weather";

function App() {
   return (
      <>
         <GlobalStyles />
         <GlobalTypography />
         <WaetherProvide>
            <Router />
         </WaetherProvide>
         <ToastContainer
            position="top-center"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="dark"
         />
      </>
   );
}

export default App;
