import { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import MessageItem from '../MessageItem/MessageItem';
import Api from '../../utils/Api';
import './ChatWindow.css';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';

function ChatWindow({ user, data }) {

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const body = useRef(); //Para controlar a div bory, usaremos para sentar a conversa no final;
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //Monitora as mensagens do chat
        setList([]);
        let unsub = Api.onChatContent(data.chatId, setList, setUsers);
        return unsub;
    }, [data.chatId]);

    useEffect(() => {
        //Se a altura do body for maior que a disponível calcula e joga para o final;
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list]);

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleSendClick = () => {
        if (text !== '') {
            Api.sendMessage(data, user.id, 'text', text, users)
            setText('');
            setEmojiOpen(false);

        }
    }

    const handleInputKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleSendClick();
        }
    }

    const handleMicClick = () => {
        //Função de gravação do navegador
        if (recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }

            recognition.start();
        }
    }

    return (
        <div className='chatWindow'>
            <div className='chatWindow--header'>
                <div className='chatWindow--headerInfo'>
                    <img
                        className='chatWindow--avatar'
                        src={data.image}
                        alt=""
                    />
                    <div className='chatWindow--name'>
                        {data.title}
                    </div>
                </div>
                <div className='chatWindow--headerButtons'>

                    <div className='chatWindow-btn' title='Pesquisar'>
                        <SearchIcon style={{ color: '#54656F' }} />
                    </div>
                    <div className='chatWindow-btn' title='Mais opções'>
                        <MoreVertIcon style={{ color: '#54656F' }} />
                    </div>
                </div>
            </div>

            <div ref={body} className='chatWindow--body'>
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div
                className='chatWindow--emojiArea'
                style={{ height: emojiOpen ? '305px' : '0px' }}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className='chatWindow--footer'>

                <div className='chatWindow--pre'>

                    <div
                        className='chatWindow-btn'
                        onClick={handleCloseEmoji}
                        style={{ width: emojiOpen ? '40px' : '0px' }}
                    >
                        <CloseIcon style={{ color: '#54656F' }} />
                    </div>

                    <div
                        className='chatWindow-btn'
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{ color: emojiOpen ? '#008069' : '#54656F' }} />
                    </div>

                    <div className='chatWindow-btn' title='Anexar'>
                        <AttachFileIcon style={{ color: '#54656F' }} />
                    </div>
                </div>

                <div className='chatWindow--inputArea'>
                    <input
                        className='chatWindow--input'
                        type="text"
                        placeholder='Mensagem'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyUp={handleInputKeyUp}
                    />
                </div>

                <div className='chatWindow--pos'>

                    {text === '' &&
                        <div
                            onClick={handleMicClick}
                            className='chatWindow-btn'
                        >
                            <MicIcon style={{ color: listening ? '#FF3B30' : '#54656F' }} />
                        </div>
                    }

                    {text !== '' &&
                        <div
                            onClick={handleSendClick}
                            className='chatWindow-btn'
                        >
                            <SendIcon style={{ color: '#54656F' }} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ChatWindow;