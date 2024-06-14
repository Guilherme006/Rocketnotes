import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
    return(
        <Container>

            <Profile to="/profile">
                <img src="https://github.com/Guilherme006.png" alt="Foto do usuário"/>
                <div>
                    <span>Bem vindo,</span>
                    <strong>Guilherme Lazari</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}