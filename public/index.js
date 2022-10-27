function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{users: [{ name:"peter", email: "peter@peter.com", password: "peter", balance:100 }]}}>
        <Route path="/" exact component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/login" exact component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
