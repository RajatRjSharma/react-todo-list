import { React, useState } from "react";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description should not be blank !!");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <form className="container w-50" onSubmit={submit}>
      <h3 className="text-center my-3">Add Todos</h3>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Todo Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Todo Description
        </label>
        <input
          type="text"
          className="form-control"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-sm btn-primary">
        Add
      </button>
    </form>
  );
}
