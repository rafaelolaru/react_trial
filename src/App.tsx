import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import ModalPopUp from "./components/ModalPopUp";
import styled from "styled-components";
import { Modal } from "./components/Modal";
import { useEffect } from "react";
// import { getRandom } from "./services/getRandom";
//import { refreshDigits } from "./services/refreshDigits";
//const refreshDigits = require("./services/refreshDigits");
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((showModal) => !showModal);
  };
  const items = [
    { name: "Timisoara", id: 1 },
    { name: "Bucuresti", id: 2 },
  ];

  const handleSelectItem = (name: string, id: number) => {
    console.log(name + id);
  };

  function getRandom() {
    let random = Math.floor(Math.random() * 1000000000);
    return random;
  }

  function refreshDigits(items: any) {
    for (let i = 0; i < items.length; i++) {
      items.id = getRandom();
    }
  }

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  `;

  const HALF_MINUTE_MS = 30000;

  useEffect(() => {
    const interval = setInterval(() => {
      refreshDigits(items);
      console.log("it refreshed");
    }, HALF_MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="My authenticators"
          onSelectItem={handleSelectItem}
        />
        {alertVisible && (
          <Alert onClose={() => setShowModal(false)}>Hello World</Alert>
        )}
      </div>
      <Container>
        <Button onClick={openModal}>I'm a modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
      <div>
        {/* <Button color="success" onClick={() => switchModal()}>
          open modal
        </Button> */}
      </div>
    </>
  );
}
export default App;
