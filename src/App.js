import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      entyInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({newTask: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //let element = this._input;
    let longitud = this.state.tasks.length;
    let task = {
        id: longitud + 1,
        name: this.state.newTask,
        done: false
    }
    this.state.newTask !== '' ? this.setState({tasks: this.state.tasks.concat([task]),entyInput: ''}) : this.setState({tasks: this.state.tasks,entyInput: "error"});
    //this.state.newTask !== '' ? this.setState({tasks: this.state.tasks.concat([task])}) : this.setState({tasks: this.state.tasks})
    /*
     if(this.state.newTask !== ''){
      this.setState({
        tasks: this.state.tasks.concat([task]),
        entyInput: ''
      })  
    } else {   
       this.setState({
        tasks: this.state.tasks,
        entyInput: "error"
      }) 
    }   
    */
    this.setState({newTask: ''});
  }

  handleCompleted(id, event){
   event.preventDefault();
   let arr = this.state.tasks;
   let pulsado = arr[id];
   pulsado.done = !arr[id].done; 
   this.setState({
      tasks : arr
   });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, id) => 
                <li key={task.id} onClick={this.handleCompleted.bind(this, id)} className={task.done ? "done" : ''}>{task.name}</li>)
            }
          </ul>

          <form onSubmit={this.handleSubmit}>
            <input type="text" id="new-task"
             placeholder="Ingresa una tarea y oprime Enter"
             value={this.state.newTask} 
             onChange={this.handleChange} 
             className={this.state.entyInput}
             />
          </form>
          
        </div>
      </div>
    )
  }
}

export default App;
