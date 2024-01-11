import Image from 'next/image'
import styles from './page.module.css'
import React, { useState } from 'react';

export default function Home() {

  // type SquareValue = 'X' | 'O' | null;

  //   interface SquareProps {
  //     // TODO: Define the SquareProps interface - i.e. what types of props the Square should accept
  //   }

  //   //React.FC is a generic Typescript type provided by React for defining functional components
  //   //Using React.FC explicitly types is as a functional component and indicates that is should be used as a React component
  //   const Square: React.FC<SquareProps> = ({ /* TODO: Square component props */ }) => ( //represents a square in a Tic Tac Toe game
  //     // TODO: Square component implementation
  // );

  //   interface BoardProps {
  //     // TODO: Define the BoardProps interface
  //   }

  //   const Board: React.FC<BoardProps> = ({ /* TODO: Board component props */ }) => {
  //     // TODO: Board component implementation
  //   };

  //   const calculateWinner = (squares: SquareValue[]): SquareValue | null => {
  //     // TODO: Implement the logic to calculate the winner
  //     return null;
  //   };

  // const App: React.FC = () => {
  // TODO: Define state and functions needed for the game

  // TODO: Implement the handleClick function

  //   const winner = calculateWinner(/* TODO: pass the squares state here */);
  //   const status = winner
  //     ? `Winner: ${winner}`
  //     : `Next player: ${/* TODO: determine the next player */}`
  // };

  return (
    <main className={styles.main}>
      <h1>Tic-Tac-Toe Starter Code</h1>
      <div className="game">
        <div className="game-board">
          {/* TODO: Render the Board component */}
        </div>
        <div className="game-info">
          <div>Hello!{status}</div>
        </div>
      </div>


    </main>
  )
}
