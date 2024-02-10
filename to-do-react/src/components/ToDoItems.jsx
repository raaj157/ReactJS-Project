import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";
const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <ToDoItem
        key = {item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default ToDoItems;
