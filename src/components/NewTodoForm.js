import React, { useState } from "react";

function NewTodoFormComponent(props) {
  const [descriptionChanged, setDescription] = useState("");
  const [assignedChanged, setAssigned] = useState("");

  const submitTodo = () => {
    if (descriptionChanged !== "" || assignedChanged !== "") {
      props.addTodo(descriptionChanged, assignedChanged);
      setAssigned("");
      setDescription("");
    }
  };

  return (
    <div className="mt-5">
        <h5>New Todo Form (insert todos)</h5>
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            className="form-control"
            type="text"
            required
            onChange={(e) => setAssigned(e.target.value)}
            value={assignedChanged}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={descriptionChanged}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mt-3"
          type="button"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoFormComponent;
