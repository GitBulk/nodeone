import React, { useState, useEffect } from "react";

export default function UserStorage() {
  const [player, setPlayer] = useState('Kaka');

  useEffect(() => {
    const player = localStorage.getItem('player')
    if (player) {
      setPlayer(player)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('player', player)
  }, [player])

  function handleOnChange(e) {
    setPlayer(e.target.value)
  }

  return (
    <select value={player} onChange={handleOnChange}>
      <option>Messi</option>
      <option>CR7</option>
      <option>Kaka</option>
      <option>Coco</option>
    </select>
  );
}
