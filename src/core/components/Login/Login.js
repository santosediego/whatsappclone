import Api from '../../utils/Api';
import './Login.css'

function Login({ onReceive }) {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();

        if (result) {
            onReceive(result.user);
        } else {
            alert(`Erro, não foi possível realizar o login com o Facebook!`)
        }
    }

    return (
        <div className='login'>
            <button onClick={handleFacebookLogin}>Logar com o Facebook</button>
        </div>
    );
};

export default Login;