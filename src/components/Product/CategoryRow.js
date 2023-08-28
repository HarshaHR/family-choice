import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';

const CategoryRow = ({ category,handleShow }) => {

    const [value, setvalue] = useState(category.categoryName)
  
  return (
    <tr>
      <td><Form.Control
        type="category"
        id="category"
        aria-describedby="category"
        value={value}
        onChange={e => setvalue(e.target.value)}
      /></td>
      <td>
        <Button variant="secondary" onClick={() => handleShow("update",category,value)}>Update <FontAwesomeIcon icon={faPen} size="sm" /></Button>{" "}
        <Button variant="danger" onClick={() => handleShow("delete",category,value)}>Delete <FontAwesomeIcon icon={faTrash} size="sm" /></Button>{" "}
      </td>
    </tr>
  );
};

export default CategoryRow;
