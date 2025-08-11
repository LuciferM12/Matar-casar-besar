import Header from "./components/Header";
import GlobalContextProvider from "./context/GlobalContextProvider";
import Main from "./pages/Main";

function App() {
  return (
    <div className="bg-stone-950">
      <GlobalContextProvider>
        <Header />
        <Main />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
