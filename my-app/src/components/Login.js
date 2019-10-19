import React, {useState, useEffect} from "react";


const Login = () => {
    const [form, setForm] = useState({username:"", password:""});

    const handleChanges = e => {
        setForm({...form, [e.target.name] : e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={form.username} onChange={handleChanges}></input>
                <input type="password" name="password" value={form.password} onChange={handleChanges}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login