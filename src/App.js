import './App.css';
import Content from './components/Content';
import NotesList from './components/NotesList';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Content/> 
      <NotesList/>
    </div>
  );
}

export default App;
