import './NewChat.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

function NewChat({ user, chatlist, show, setShow }) {

    const [list, setList] = useState([
        {
            id: 123,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_l-yO-axUTUnTOxJqTbbO-vJ6RZ5XC6X44A&usqp=CAU',
            name: 'José Maria'
        },
        {
            id: 124,
            avatar: 'https://images.vexels.com/media/users/3/140384/isolated/lists/fa2513b856a0c96691ae3c5c39629f31-avatar-de-perfil-feminino-1.png',
            name: 'Maria José'
        },
        {
            id: 125,
            avatar: 'https://cdn.pixabay.com/photo/2020/07/14/13/06/icon-5404123_960_720.png',
            name: 'Amélia'
        },
        {
            id: 126,
            avatar: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png',
            name: 'Joaquim'
        },
        {
            id: 127,
            avatar: 'https://pps.whatsapp.net/v/t61.24694-24/187140473_140232428480416_4793432016690447685_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=72b36341dd2fdf0664f820697892187c&oe=629D4C9B',
            name: 'Diego Santos'
        },
    ]);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div
            className='newChat'
            style={{ left: show ? 0 : -415 }}
        >
            <div className='newChat--head'>
                <div
                    className='newChat--backButton'
                    onClick={handleClose}
                >
                    <ArrowBackIcon style={{ color: '#FFF' }} />
                </div>
                <div className='newChat--headTitle'>Nova conversa</div>
            </div>

            <div className='newChat--list'>
                {list.map((item, key) => (
                    <div className='newChat--item' key={key}>
                        <img className='newChat--itemAvatar' src={`${item.avatar}`} alt="" />
                        <div className='newChat--itemName'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewChat;