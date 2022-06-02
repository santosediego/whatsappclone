import { useEffect, useState } from 'react';
import ChatListItem from './core/components/ChatListItem/ChatListItem';
import ChatIntro from './core/components/ChatIntro/ChatIntro';
import ChatWindow from './core/components/ChatWindow/ChatWindow';
import NewChat from './core/components/NewChat/NewChat';
import './App.css';

//https://mui.com/pt/material-ui/material-icons/
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [chatlist, setChatlist] = useState([
    { chatId: 1, title: 'Fulano Lano', image: 'https://pps.whatsapp.net/v/t61.24694-24/187140473_140232428480416_4793432016690447685_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=72b36341dd2fdf0664f820697892187c&oe=629D4C9B' },
    { chatId: 2, title: 'Beltrano de Tal', image: 'https://pps.whatsapp.net/v/t61.24694-24/187140473_140232428480416_4793432016690447685_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=72b36341dd2fdf0664f820697892187c&oe=629D4C9B' },
    { chatId: 3, title: 'Maria João', image: 'https://pps.whatsapp.net/v/t61.24694-24/187140473_140232428480416_4793432016690447685_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=72b36341dd2fdf0664f820697892187c&oe=629D4C9B' },
    { chatId: 4, title: 'João Maria', image: 'https://pps.whatsapp.net/v/t61.24694-24/187140473_140232428480416_4793432016690447685_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=72b36341dd2fdf0664f820697892187c&oe=629D4C9B' },
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [showNewChat, setShowNewChat] = useState(false);
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://pps.whatsapp.net/v/t61.24694-24/187140473_140232428480416_4793432016690447685_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=72b36341dd2fdf0664f820697892187c&oe=629D4C9B',
    name: 'Diego Santos'
  });

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  return (
    <div className='app-window'>
      <div className='sidebar'>

        <NewChat
          chatList={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />

        <header>
          <img
            className='header--avatar'
            src={user.avatar}
            alt=""
          />

          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div
              onClick={handleNewChat}
              className='header--btn'
            >
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
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>

      </div>
      <div className='contentarea'>
        {activeChat.chatId !== undefined &&
          <ChatWindow
            user={user}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}

export default App;