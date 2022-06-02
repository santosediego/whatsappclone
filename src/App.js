import { useEffect, useState } from 'react';
import { async } from '@firebase/util';
import ChatListItem from './core/components/ChatListItem/ChatListItem';
import ChatIntro from './core/components/ChatIntro/ChatIntro';
import ChatWindow from './core/components/ChatWindow/ChatWindow';
import NewChat from './core/components/NewChat/NewChat';
import Login from './core/components/Login/Login';
import Api from './core/utils/Api';
import './App.css';

//https://mui.com/pt/material-ui/material-icons/
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [chatlist, setChatlist] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [showNewChat, setShowNewChat] = useState(false);
  const [user, setUser] = useState({
    id: '6BsnDDx0ElbUMgOJwHLS8DZAanE2',
    name: 'Diego Santos',
    avatar: 'https://graph.facebook.com/398710652314273/picture',
  });

  useEffect(() => {
    if (user !== null) {
      let unsub = Api.onChatList(user.id, setChatlist);
      return unsub;
    }
  }, [user]);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    }
    await Api.addUser(newUser);
    setUser(newUser);
  }

  if (user == null) {
    return (<Login onReceive={handleLoginData} />)
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