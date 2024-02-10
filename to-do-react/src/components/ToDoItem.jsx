import { AiFillDelete} from "react-icons/ai"

function ToDoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="row torow">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger tobtn"
          onClick={() => onDeleteClick(todoName)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
