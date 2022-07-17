import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav>
        <Link to='/invoices'>Invoices</Link> | {' '}
        <Link to='/expenses'>Expenses</Link>
    </nav>
    <Outlet/> {/*it will nest the UI for shared components when child route matches */}
    </div>
  );
}

export default App;
