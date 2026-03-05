function Login(props) {

    const user = {
        username: "Daniel",
        email: "dani@gmail.com"
    }

    const handleClick = () => {
        props.handleLogin(user)
    }

    return (
        <section>
            <h2>login section</h2>
            <button onClick={handleClick}>login</button>
        </section>
    )
}

export default Login
