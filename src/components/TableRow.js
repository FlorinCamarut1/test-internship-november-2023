import React from 'react';
import styles from './TableRow.module.css';
function TableRow({ localData }) {
  console.log(localData);
  return (
    <>
      <table>
        <div>
          <tr>
            <td>Word</td>
          </tr>
          <tr>
            <td>{localData?.name}</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>DateTime</td>
          </tr>
          <tr>
            <td>{localData?.date}</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>Actions</td>
          </tr>
          <tr>
            <td>{localData?.hour}</td>
          </tr>
        </div>
      </table>
    </>
  );
}

export default TableRow;
