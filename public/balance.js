function Balance() {
  const ctx = React.useContext(UserContext);
  const user = ctx.users[ctx.users.length - 1];
  const userBalance = user.balance;
  return (
    <>
      <Card 
      bgcolor="secondary" 
      txtcolor="white" 
      header="Account Balance" 
      body={
        <> <h4>Greetings, {user.name}!</h4><br/><br/> 
        Your current account balance is {user.balance}.<br/><hr></hr><br/>
        Make a <a href="#/deposit">deposit</a>.<br/>
        Make a <a href="#/withdraw">withdrawal</a>.
        </>



      } 
      />
    </>
  );
}
