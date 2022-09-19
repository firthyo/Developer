import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import HeaderNavBar from "./container/HeaderNavBar";
import MainLanding from "./container/contents/MainLanding";

function App() {
  return (
    <Swrapper>
      <SHeader>
        <HeaderNavBar></HeaderNavBar>
      </SHeader>
      <Scontent>
        <MainLanding></MainLanding>
      </Scontent>
    </Swrapper>
  );
}

export default App;

const Swrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const SHeader = styled.div`
  background: silver;
`;

const Scontent = styled.div`
  flex: 1;
  overflow: auto;
  background: white;
`;
