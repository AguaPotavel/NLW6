import IllustrationImg from '../assets/images/illustration.svg';
import GoogleImage from '../assets/images/google-icon.svg';
import LetMeAskLogo from '../assets/images/logo.svg';
import '../styles/auth.scss';
import {Button} from '../components/Button'

import { Link } from 'react-router-dom';
import {useAuth} from '../hooks/useAuth'


export function NewRoom(){
    const {user} = useAuth()
    return(
        <div id="page-auth">
        <aside>
            <img src={IllustrationImg} alt="ilutração" />
            <strong>Crie salas de Q&A ao-vivo</strong>
            <p>tire as duvidas da sua audiência</p>
        </aside>
        <main>
            <div className="main-content">
                <img src={LetMeAskLogo} alt="let me ask logo"/>
                <h2>Criar uma nova sala</h2>
                <form action="">
                    <input 
                        type="text" 
                        placeholder="digite o código da sala"
                    />
                    <Button type="submit">
                        Criar sala
                    </Button>
                </form>
                <p>quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
            </div>
        </main>
    </div>
    );
}