import './App.css';
import Header from './components/header';
import Video from './components/video';
import Block from './components/block';
import Chat from './components/chat';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='div'>
        <div className='videodiv'>
          <Video />
        </div>
        <div className='blockdiv'>
          <Block />
        </div>
        <div className='chatediv'>
          <Chat />
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
