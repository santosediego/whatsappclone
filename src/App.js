import { useState } from 'react';
import ChatListItem from './core/components/ChatListItem/ChatListItem';
import './App.css';

//https://mui.com/pt/material-ui/material-icons/
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [chatlist, setChatlist] = useState([
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  ]);
  return (
    <div className='app-window'>
      <div className='sidebar'>

        <header>
          <img
            className='header--avatar'
            src=""
            alt=""
          />

          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className='header--btn'>
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className='header--btn'>
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className='search'>
          <div className='search--input'>
            <SearchIcon fontSize='small' style={{ color: '#919191' }} />
            <input type="search" title='Caixa de texto de pesquisa' placeholder='Pesquisar ou começar uma nova conversa' />
          </div>
        </div>

        <div className='chatlist'>
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
            />
          ))}
        </div>

      </div>
      <div className='contentarea'>
        area do chat
      </div>
    </div>
  );
}

export default App;