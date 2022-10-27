function Withdraw() {
  const ctx = React.useContext(UserContext);
  const user = ctx.users[ctx.users.length - 1];
  const userBalance = user.balance;
  const [withdraw, setWithdraw] = React.useState("");
  const [show, setShow] = React.useState(true);

  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

  function validate() {
    let amount = Number(document.getElementById("withdraw").value);
    if (NaN || amount < userBalance) return true;
    else return false;
  }

  function handleWithdraw(amount) {
    console.log(withdraw, userBalance);
    if (validate) {
      let withdraw = Number(document.getElementById("withdraw").value);
      console.log(userBalance, withdraw);
      if (validate(amount)) {
        user.balance = user.balance - withdraw;
        setShow(false);
      } else {
        alert(
          "Withdraw must be a positive number that is less than your current account balance!"
        );
      }
    }
  }
  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      //status={status}
      body={
        show ? (
          <><h3>Hello, {user.name}!</h3><br/>
            <h4>Your Current Account Balance: {user.balance}</h4>
            <br />
            <hr></hr>
            <br />
            Withdraw Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="0.00"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={!withdraw}
              onClick={handleWithdraw}
            >
              withdraw
            </button>
          </>
        ) : (
          <>
            <h3>Successful withdrawal transaction!</h3>
            <br />
            <h5>New balance is {user.balance}</h5>

            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Withdraw More Funds
            </button>
          </>
        )
      }
    />
  );
}
