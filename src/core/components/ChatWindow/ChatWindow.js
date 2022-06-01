import { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import MessageItem from '../MessageItem/MessageItem';
import './ChatWindow.css';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';

function ChatWindow({ user }) {

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const body = useRef(); //Para controlar a div bory, usaremos para sentar a conversa no final;
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        { author: 123, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { author: 123, body: 'Aliquam venenatis porta velit at euismod.' },
        { author: 123, body: 'In at nibh mauris.' },
        { author: 1234, body: ' Suspendisse molestie pulvinar consequat. Fusce non odio vitae quam dictum posuere sed iaculis felis.' },
        { author: 123, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { author: 123, body: 'Aliquam venenatis porta velit at euismod.' },
        { author: 123, body: 'In at nibh mauris.' },
        { author: 1234, body: ' Suspendisse molestie pulvinar consequat. Fusce non odio vitae quam dictum posuere sed iaculis felis.' },
        { author: 123, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { author: 123, body: 'Aliquam venenatis porta velit at euismod.' },
        { author: 123, body: 'In at nibh mauris.' },
        { author: 1234, body: ' Suspendisse molestie pulvinar consequat. Fusce non odio vitae quam dictum posuere sed iaculis felis.' },
        { author: 123, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { author: 123, body: 'Aliquam venenatis porta velit at euismod.' },
        { author: 123, body: 'In at nibh mauris.' },
        { author: 1234, body: ' Suspendisse molestie pulvinar consequat. Fusce non odio vitae quam dictum posuere sed iaculis felis.' },
        { author: 123, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { author: 123, body: 'Aliquam venenatis porta velit at euismod.' },
        { author: 123, body: 'In at nibh mauris.' },
        { author: 1234, body: ' Suspendisse molestie pulvinar consequat. Fusce non odio vitae quam dictum posuere sed iaculis felis.' },
        { author: 123, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { author: 123, body: 'Aliquam venenatis porta velit at euismod.' },
        { author: 123, body: 'In at nibh mauris.' },
        { author: 1234, body: ' Suspendisse molestie pulvinar consequat. Fusce non odio vitae quam dictum posuere sed iaculis felis.' },
        { author: 123, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { author: 123, body: 'Aliquam venenatis porta velit at euismod.' },
        { author: 123, body: 'In at nibh mauris.' },
        { author: 1234, body: ' Suspendisse molestie pulvinar consequat. Fusce non odio vitae quam dictum posuere sed iaculis felis.' },
    ]);

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

    const handleSendClick = () => { }

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
                        src='https://pps.whatsapp.net/v/t61.24694-24/187140473_140232428480416_4793432016690447685_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=72b36341dd2fdf0664f820697892187c&oe=629D4C9B'
                        alt=""
                    />
                    <div className='chatWindow--name'>
                        Diego Santos
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