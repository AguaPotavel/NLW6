
import IllustrationImg from '../../assets/images/illustration.svg';
import GoogleImage from '../../assets/images/google-icon.svg';

export function Home(){
    return(
        <div>
            <aside>
                <img src={IllustrationImg} alt="ilutração" />
                <strong>Crie salas de Q&anp;A ao-vivo</strong>
                <p>tire as duvidas da sua audiência</p>
            </aside>
            <main>
                <div>
                    <button>
                    <img src={GoogleImage} alt="Logo do google" />
                    Crie suas salas com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder="digite o código da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}