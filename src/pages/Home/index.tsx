import { useHistory } from 'react-router-dom'
import { FormEvent, useState, useContext } from 'react'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import logoImgDark from '../../assets/images/logoDark.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import { database } from '../../services/firebase'

import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'

import { ThemeSelector } from '../../contexts/ThemeSelectorContext'

import {
  ContainerPageAuth,
  MainContainer,
  CreateRoomContainer,
  SeparatorDiv
} from './styles'

// import '../../styles/auth.scss';

function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')
  const value = useContext(ThemeSelector)

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exists.')
      return
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.')
      return
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <ContainerPageAuth>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <MainContainer>
          {value.dark ? (
            <img src={logoImgDark} alt="Letmeask" />
          ) : (
            <img src={logoImg} alt="Letmeask" />
          )}
          <CreateRoomContainer onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </CreateRoomContainer>
          <SeparatorDiv>ou entre em uma sala</SeparatorDiv>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContainer>
      </main>
    </ContainerPageAuth>
  )
}

export default Home
