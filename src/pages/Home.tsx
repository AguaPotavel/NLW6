import IllustrationImg from '../assets/images/illustration.svg';
import GoogleImage from '../assets/images/google-icon.svg';
import LetMeAskLogo from '../assets/images/logo.svg';
import '../styles/auth.scss';
import {Button} from '../components/Button'
import { useHistory } from 'react-router-dom';
import {useAuth} from '../hooks/useAuth'


export function Home(){
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth();

    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }
        history.push('rooms/new');

        
    }

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
                    <button className="create-room" onClick={()=> handleCreateRoom()}>
                    <img src={GoogleImage} alt="Logo do google" />
                    Crie suas salas com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder="digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}