import Login from "./components/Login";
// import SideNavbar from "./components/SideNavbar";
// import HomePage from "./components/HomePage";

function App() {
  return (
    <div
      className="App w-full relative min-h-screen"
      style={{ fontFamily: "Circular" }}
    >
      <Login/>
      {/* <div className="w-full h-full relative flex gap-2 p-2">
        <SideNavbar />
        <HomePage />
      </div> */}
    </div>
  );
}

export default App;
