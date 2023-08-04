import { ToastContainer } from "react-toastify";

function App() {
   return (
      <>
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
