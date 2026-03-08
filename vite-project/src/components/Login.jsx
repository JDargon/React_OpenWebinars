function Login(props) {

    const user = {
        username: "",
        email: ""
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        props.handleLogin(user);
    }

    const setUsername = (e) => {
        user.username = e.target.value;
    }
    const setEmail = (e) => {
        user.email = e.target.value;
    }
    return (
        <section>
            <h2>login section</h2>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <input type="text" id="username" onChange={setUsername} />
                    <label htmlFor="username">username</label>
                </fieldset>
                <fieldset>
                    <input type="text" id="email" onChange={setEmail} />
                    <label htmlFor="email">Email</label>
                </fieldset>

                <button>login</button>
            </form>

        </section>
    )
}

export default Login
