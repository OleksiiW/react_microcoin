import { Menu } from './components/Menu';
import { Panel } from './components/Admin/Panel';
import { LoginPage } from './pages/LoginPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cabinet from './components/User/Cabinet';
import MyLoans from './components/User/MyLoans';
import TakeLoan from './components/User/TakeLoan';
import Pay from './components/User/Pay';
import Faq from './components/User/Faq';
import WaitingRoom from './components/User/WaitingRoom';
import Loans from './components/Admin/Loans';
import PayOff from './components/Admin/PayOff';
import Change from './components/Admin/Change';
import Delete from './components/Admin/Delete';



function App() {
  const userType = localStorage.getItem('role');
  console.log(userType)

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Menu />
          <TakeLoan />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/panel'>
        {() => {
          const userType = localStorage.getItem('role'); 
          return userType === 'admin' ? (<><Panel /> <Loans /> </>) : <LoginPage />;
        }}
        </Route>

        <Route exact path='/cabinet'>
          <Menu />
          <Cabinet />
        </Route>
        <Route exact path='/my_loans'>
          <Menu />
          <MyLoans />
        </Route>
        <Route exact path='/pay'>
          <Menu />
          <Pay />
        </Route>
        <Route exact path='/faq'>
          <Menu />
          <Faq />
        </Route>
        <Route exact path='/waiting_room'>
          <Menu />
          <WaitingRoom />
        </Route>

        <Route exact path='/loans'>
          <Panel />
          <Loans />
        </Route>
        <Route exact path='/change'>
          <Panel />
          <Change />
        </Route>
        <Route exact path='/delete'>
          <Panel />
          <Delete />
        </Route>
        <Route exact path='/pay_off'>
          <Panel />
          <PayOff />
        </Route>
 
      </Switch>
    </div>
  );
}

export default App;





