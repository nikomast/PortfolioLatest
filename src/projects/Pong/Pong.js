import React, { useState, useEffect, useRef } from 'react';
import './Pong.css';

function Pong() {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [gameState, setGameState] = useState({
    ball: {
      x: 200,
      y: 200,
      velocityX: 5,
      velocityY: 5,
      radius: 5,
    },
    leftPaddle: {
      y: 200,
      height: 40,
      width: 10,
      speed: -5,
      defaultSpeed: -5
    },
  });
  const [score, setScore] = useState(0);

  const canvasRef = useRef(null);
  
  const update = () => {
    setGameState(prevState => {
      const newY = prevState.leftPaddle.y + prevState.leftPaddle.speed;
      const clampedY = Math.min(Math.max(newY, prevState.leftPaddle.height / 2), 300 - prevState.leftPaddle.height / 2);
  
      let newBallX = prevState.ball.x + prevState.ball.velocityX;
      let newBallY = prevState.ball.y + prevState.ball.velocityY;

      if (newBallY - prevState.ball.radius < 0 || newBallY + prevState.ball.radius > 300) {
        prevState.ball.velocityY = -prevState.ball.velocityY;
        newBallY = prevState.ball.y + prevState.ball.velocityY;
      }

      if (newBallX - prevState.ball.radius < -1) {
        setIsGameRunning(false);
        return prevState;
      }

      if (newBallX + prevState.ball.radius > 590) {
        setScore(prevScore => prevScore + 1);
        prevState.ball.velocityX = -(prevState.ball.velocityX * 1.1);
        newBallX = prevState.ball.x + prevState.ball.velocityX;
      }

      const paddleTop = clampedY - prevState.leftPaddle.height / 2;
      const paddleBottom = clampedY + prevState.leftPaddle.height / 2;

      if (
        newBallX - prevState.ball.radius < prevState.leftPaddle.width &&
        newBallY + prevState.ball.radius > paddleTop &&
        newBallY - prevState.ball.radius < paddleBottom
      ) {
        prevState.ball.velocityX = -prevState.ball.velocityX;
        newBallX = prevState.ball.x + prevState.ball.velocityX;
      }

      return {
        ball: {
          ...prevState.ball,
          x: newBallX,
          y: newBallY
        },
        leftPaddle: {
          ...prevState.leftPaddle,
          y: clampedY
        }
      };
    });
  };

  useEffect(() => {
    const handleInputStart = (e) => {
      if (!isGameRunning) return;
      e.preventDefault();
      setGameState(prev => ({
        ...prev,
        leftPaddle: { ...prev.leftPaddle, speed: -prev.leftPaddle.speed }
      }));
    };

    const handleInputEnd = (e) => {
      if (!isGameRunning) return;
      e.preventDefault();
      setGameState(prev => ({
        ...prev,
        leftPaddle: { ...prev.leftPaddle, speed: prev.leftPaddle.defaultSpeed }
      }));
    };

    // Disable the context menu for right-click
    const handleContextMenu = (e) => {
      e.preventDefault(); // Prevent context menu from appearing
    };

    // Mouse Events
    window.addEventListener("mousedown", handleInputStart);
    window.addEventListener("mouseup", handleInputEnd);

    // Touch Events
    window.addEventListener("touchstart", handleInputStart);
    window.addEventListener("touchend", handleInputEnd);

    // Disable right-click context menu
    window.addEventListener("contextmenu", handleContextMenu);

    // Cleanup to avoid multiple event listeners
    return () => {
      window.removeEventListener("mousedown", handleInputStart);
      window.removeEventListener("mouseup", handleInputEnd);
      window.removeEventListener("touchstart", handleInputStart);
      window.removeEventListener("touchend", handleInputEnd);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [isGameRunning]);

  useEffect(() => {
    if (isGameRunning) {
      const interval = setInterval(update, 1000 / 60); // 60 FPS
      return () => clearInterval(interval);
    }
  }, [isGameRunning]);

  function drawBall(context) {
    context.fillStyle = '#66fcf1';
    context.beginPath();
    context.arc(gameState.ball.x, gameState.ball.y, gameState.ball.radius, 0, Math.PI * 2);
    context.fill();
  }

  function drawPaddle(context) {
    context.fillStyle = '#45a29e';
    context.fillRect(10, gameState.leftPaddle.y - (gameState.leftPaddle.height / 2), gameState.leftPaddle.width, gameState.leftPaddle.height);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(context);
    drawPaddle(context);

    // Draw the right wall
    context.fillStyle = '#45a29e';
    context.fillRect(canvas.width - 10, 0, 10, canvas.height);
  }, [gameState]);

  const resetGame = () => {
    setGameState({
      ball: {
        x: 200,
        y: 200,
        velocityX: 5,
        velocityY: 5,
        radius: 5,
      },
      leftPaddle: {
        y: 200,
        height: 40,
        width: 10,
        speed: -5,
        defaultSpeed: -5
      },
      score: 0
    });
    setScore(0);
    setIsGameRunning(true);
  };

  return (
    <div className='game-container'>
      <h2>Game</h2>
      <div className='canvas-container'>
        <canvas ref={canvasRef} width={600} height={300}></canvas>
        {!isGameRunning && (
          <button className='restart' onClick={resetGame}>Play</button>
        )}
        <div className='score'>Score: {score}</div>
      </div>
      <div className="rotate-message">
        Please rotate your screen for the best experience.
      </div>
    </div>
  );
}

export default Pong;
