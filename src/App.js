import React, {Component} from 'react';
import IniciarSesion from  "./login"
import Administarcion from  "./conponents/Administardor"
import Cordinador from  "./conponents/Coordinador"
import AppContext from "./context/contex";
import { Switch,  BrowserRouter ,Router, Link , Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        usuarioAministrador: "carlos-administardor",
        usuarioCoordinador: "luis-coordinador",
      
      },
      setData: this.setData
    };
  }

  setData = data => {
    this.setState({
      data
    });

  };

  componentDidUpdate() {
    sessionStorage.setItem('data', JSON.stringify(this.state.data))
 
  }

  componentWillMount(){
    sessionStorage.getItem('data') && this.setState({
      data: JSON.parse(sessionStorage.getItem('data'))
    })
  
  }
  
  render(){
    return (
      <div className="App">
         <AppContext.Provider value={this.state}>   
          <BrowserRouter>
           <Switch>
             <Route exact path='/' component={IniciarSesion}/>
             <Route  path='/administarcion' component={Administarcion}/>
             <Route  path='/coordinador' component={Cordinador}/>
          </Switch>
          </BrowserRouter>
         </AppContext.Provider>   
      </div>

     );  
  }
  
}

export default App;
