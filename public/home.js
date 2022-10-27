function Home() {
    const ctx = React.useContext(UserContext);
    return(
        <Card
            bgcolor="warning"
            txtcolor="white"
            header="BadBank Home Page"
            title="Welcome to Bad Banking!"
            text="Home to the most unsecure and simplistic bank on the market today!"
            body={<img src="bank.png" className="img-fluid" alt="Responsive image"/>}
        />
    );
}