function AllData() {
  const ctx = React.useContext(UserContext);
  const users = ctx.users;
  return (
    <Card
      bgcolor="warning"
      txtcolor="white"
      header="All Users Account Data"
      body={users.map((user) => (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{user.name}</th>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.balance}</td>
            </tr>
          </tbody>
        </table>
      ))}
    />
  );
}
