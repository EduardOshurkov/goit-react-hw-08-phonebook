
import UserRoutes from "./UserRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "Modules/Navbar/Navbar";
import { current } from "Redux/auth/auth-operations";
import styled from '@emotion/styled';


export function App() {
    const dispatch = useDispatch()
    useEffect(() => {
dispatch(current())
    }, [])
    
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
