import { useState } from 'react';

const Controlado = () => {
  const [todo, setTodo] = useState({
    title: 'todo #1',
    description: 'description #1',
    state: 'pendiente',
    priority: true,
  });

  const { title, description, state, priority } = todo;
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, state, priority);

    if (!title.trim() || !description.trim()) {
      console.log("campos vacíos");
      setError(true);
      return;
    } else {
      setError(false);
    }
  };

  

  const handleChenge = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    const { name, type, checked, value } = e.target;

    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChenge}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        value={description}
        onChange={handleChenge}
      />
      <div className="form-check">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChenge}
        />
        <label htmlFor="inputCheck" className="">
          Dar prioridad
        </label>
      </div>

      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChenge}
      >
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {error && <div className='alert alert-danger mt-2'>todos los campos son obligatorios</div>}
    </form>
  );
};
export default Controlado;
