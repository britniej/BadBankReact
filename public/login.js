function Login({alert}) {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const ctx = React.useContext(UserContext);
  
    function clearForm() {
      setName("");
      setEmail("");
      setPassword("");
      setShow(true);
    }
  
    function validate(field, label) {
      let valid = true;
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(()=> setStatus(''),3000);
        return false
      }
      if (label == 'email') {
        valid = String(field).toLowerCase().match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        setStatus(valid ? '': "Please enter valid email. Ex: JaneDoe@google.com.")
      }
      if (label == 'password') {
        valid = field.length >= 8;
        setStatus(valid ? '': "Please enter valid password that is 8 characters or more.")
      }
      if (!valid) {
        console.log(status);
        return false;
      } else {
        return true;
      }
    };
    
  
    function handleLogin() {
      console.log(email, password);
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      setShow(false);
    }

  
    return (

      <Card
        bgcolor="warning"
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              <h1>Hello, please login to continue.</h1>
              <br />
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
              />
              <br />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
              />
              <br />
              <button
                id="submit"
                type="submit"
                className="btn btn-light"
                disabled={!email || !password}
                onClick={handleLogin}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>
                Add another account
              </button>
            </>
          )
        }
      />
    );
  }
  