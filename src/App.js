
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Home from './home';
function App() {
  let component;
  //Cases if there are differents views
  switch(window.location.pathname)
  {
    default:
      component = <Home/>
  } 
  return (
    <>
      <Navbar/>
      {component}
    </>
  )
}

export default App;
