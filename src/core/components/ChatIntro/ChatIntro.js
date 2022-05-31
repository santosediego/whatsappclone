import './ChatIntro.css'

import { ReactComponent as IntroLogo } from '../assets/img/intro-logo.svg'

function ChatIntro() {
    return (
        <div className='chatIntro'>
            <img src="" alt="" />
            <IntroLogo />
            <h1>WhatsApp Web Clone</h1>
            <h2>
                Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado á internet.
                <br/>
                Use o WhatsApp em até quantro aparelhos conectados em um celular ao mesmo tempo.
            </h2>
        </div>
    );
}

export default ChatIntro;