
import UserRoutes from "./UserRoutes";
import Navbar from "Modules/Navbar/Navbar";
import styled from '@emotion/styled';


export function App() {
    
    return (
      <Container>
        <Navbar/>
        <UserRoutes />
        </Container>
    )
}


const Container = styled.div`
    text-align: center;
    padding: 40px;
`;
