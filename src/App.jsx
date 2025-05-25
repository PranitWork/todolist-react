import Create from "./controllers/Create.jsx";
import Read from "./controllers/Read.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 lg:p-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
                <Create />
                <Read />
            </div>
        </div>
  );
};

export default App;
