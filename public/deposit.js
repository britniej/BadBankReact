function Deposit() {
  const ctx = React.useContext(UserContext);
  const user = ctx.users[ctx.users.length - 1];
  const userBalance = user.balance;
  const [deposit, setDeposit] = React.useState("");
  const [show, setShow] = React.useState(true);

  function clearForm() {
    setDeposit("");
    setShow(true);
  }

  function validate() {
    let amount = Number(document.getElementById("deposit").value);
    if (NaN || amount < 0) {
      return false;
    }
    return true;
  }

  function handleDeposit(amount) {
    let deposit = Number(document.getElementById("deposit").value);
    console.log(userBalance, deposit);
    if (validate(amount)) {
      user.balance = user.balance + deposit;
      setShow(false);
    } else {
      alert("Deposit must be a positive number!");
    }
  }

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      //status={status}
      body={
        show ? (
          <>
            <h3>Hello, {user.name}!</h3>
            <br />
            <h4>Your Current Account Balance: {user.balance}</h4>
            <br />
            <hr></hr>
            <br />
            Deposit Amount
            <br />
            <input
              type="number"
              className="form-control"
              id="deposit"
              placeholder="0.00"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={!deposit}
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h3>Successful deposit transaction!</h3>
            <br />
            <h5>New balance is {user.balance}</h5>

            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Deposit More Funds
            </button>
          </>
        )
      }
    />
  );
}
