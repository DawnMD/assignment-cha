import React, { useState } from "react";

function Table(props) {
  const [timer, setTimer] = useState(Math.floor(Math.random() * 30) + 30);

  setTimeout(() => {
    setTimer(timer - 1);
  }, 1000);
  return (
    <div className="container">
      {timer > 0 ? (
        <p>Time Left : {timer} </p>
      ) : (
        <p>Time is Up Please Refresh</p>
      )}

      <h1>Claim your seats</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) => (
            <tr>
              <th scope="row">1</th>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.availability}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => props.onchangeAv(row.id)}
                >
                  Book Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
