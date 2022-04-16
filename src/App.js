import './App.css';
import Content from './components/Content';
import NotesList from './components/NotesList';
import Header from './components/Header';

function App() {
  return (
    // <div className='main'>
        
    // <div className='App'>
  
      
     
    // </div>
     
    //  </div>
    <section className="layout">
  <div className="sidebar"><Content/> </div>
  <div className="body"><Header/><NotesList/></div>
</section>
  );
}

export default App;
