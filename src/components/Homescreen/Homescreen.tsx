import React, { useState, useEffect } from "react";
import { Wrapper, NoButton, Button, WinContainer } from "./Homescreen.styles";
import { Modal, Box, Typography } from "@mui/material";

type Props = {};

const Homescreen: React.FC<Props> = () => {
  const MAX_COUNT = 21;
  const FINAL_MAX_COUNT = 51;
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [showOriginalNo, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [winButtonText, setWinButtonText] = useState("Claim Prize");
  const [yesClicked, setYesClicked] = useState(false);
  const [imgURL, setimgURL] = useState(
    "https://giphy.com/embed/evCPQk1auQyRwpelDr"
  );

  const [buttonStyle, setButtonStyle] = useState({
    fontSize: 20,
    height: 60,
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getRandomPosition = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 50;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    return { x: newX, y: newY };
  };

  const handleHover = () => {
    setPosition((prevPosition) => getRandomPosition());
    setCount((prev) => {
      const newCount = prev + 1;

      if (newCount > 2 && newCount <= 5) {
        setMessage("This will be easier if you just say yes");
      } else if (newCount > 5 && newCount <= 8) {
        setMessage("Haha you're so funny xD just click <strong>yes</strong>");
      } else if (newCount > 8 && newCount <= 14) {
        setimgURL("https://giphy.com/embed/edwpQpTk8CbHiutY52");

        setMessage("Ok please just click yes");
      } else if (newCount > 13 && newCount <= 17) {
        setMessage("Don't you think you're overdoing it?");
      } else if (newCount > 17 && newCount <= 21) {
        setMessage("PLEASEEEEEEEE");
      } else if (newCount > MAX_COUNT && newCount <= 30) {
        setimgURL("https://giphy.com/embed/LRr751mok58RyC0nZ0");
        setMessage("Fine, I'm gonna count until you say yes");
      } else if (newCount > 30 && newCount <= 50) {
        setButtonStyle((prev) => ({
          fontSize: prev.fontSize * 1.1,
          height: prev.height * 1.1,
        }));
      } else if (newCount > 50 && newCount <= FINAL_MAX_COUNT) {
        handleOpen();
      }
      return newCount;
    });
  };

  useEffect(() => {
    console.log(count);
  }, [position, showOriginalNo, count, yesClicked]);
  if (yesClicked) {
    return (
      <>
        <Wrapper>
          <iframe
            src={imgURL}
            width="240"
            height="240"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <h1>I knew you would accept me!!</h1>
          <h1>I LOVE YOU AND THANK YOU FOR BEING MY VALENTINE'S EHE</h1>
        </Wrapper>
      </>
    );
  } else if (count < FINAL_MAX_COUNT) {
    return (
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ALERT
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You must click YES now or else your browser will crash.
            </Typography>
          </Box>
        </Modal>
        {!showOriginalNo ? (
          <NoButton
            leftPosition={position.x}
            topPosition={position.y}
            onMouseOver={handleHover}
          >
            No
          </NoButton>
        ) : null}

        <Wrapper>
          <iframe
            src={imgURL}
            width="240"
            height="240"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <h1>Will you be my Valentine's?</h1>
          {<h1 dangerouslySetInnerHTML={{ __html: message }}></h1>}

          {count > MAX_COUNT ? <h1>Rejection count: {count}</h1> : null}
          <Button
            fontSize={buttonStyle.fontSize}
            height={buttonStyle.height}
            onMouseOver={() => {
              console.log(showOriginalNo);
            }}
            onClick={() => {
              setimgURL("https://giphy.com/embed/wuBduJG4DIVpMqwaEj");
              setYesClicked(true);
            }}
          >
            Yes
          </Button>
          {showOriginalNo ? (
            <Button
              fontSize={buttonStyle.fontSize}
              height={buttonStyle.height}
              onMouseOver={() => setShow(false)}
            >
              No
            </Button>
          ) : null}
        </Wrapper>
      </>
    );
  } else {
    return (
      <Wrapper>
        <h1>You're very persistent. Congratulations.</h1>
        <h1>Click the button to accept your prize</h1>
        <WinContainer
          onClick={() => {
            setimgURL("https://giphy.com/embed/wuBduJG4DIVpMqwaEj");
            setYesClicked(true);
          }}
          onMouseOver={() =>
            setWinButtonText("Yes, I will be your Valentine's")
          }
          onMouseLeave={() => setWinButtonText("Claim Prize")}
        >
          <Button fontSize={20} height={60}>
            {winButtonText}
          </Button>
        </WinContainer>
      </Wrapper>
    );
  }
};

export default Homescreen;
