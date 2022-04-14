import React from 'react'

const TableLine = ({ date, distance, onRemove, id, onEdit }) => {
  return (
    <tr className="table-block-body-row">
        <td>{date}</td>
        <td>{distance}</td>
        <td className="table-block-body-button-block">
            <button onClick={() => onRemove(id)}>Удалить</button>
            <button onClick={() => onEdit(id)}>Редактировать</button>
        </td>
    </tr>
  )
}

export default TableLine