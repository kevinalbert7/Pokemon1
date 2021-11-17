import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route path="/login" component={Login}/>
        <Route path="*" component={Error404}/> 
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
