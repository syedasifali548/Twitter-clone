import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import './App.css';


function App() {
   return (
    <div className="App">
      {/* SideBar */}
       <Sidebar/>
       

        {/*Feed  */}
        <Feed/>

        {/* Widget */}
        <Widget/>
        
    </div>
  );
}

export default App;
