import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function onChange(e: {target: {name: string, value: string}}){
        const target = e.target;
        switch(target.name){
            case 'email':
                setEmail(target.value)
                break;
            case 'username':
                setUsername(target.value)
                break;
            case 'password':
                setPassword(target.value)
                break;
        }
    }

    function Auth() {
        let form = new FormData();
        const url: string = 'http://localhost:5000/users';
        let user = {
            email: email,
            username: username,
            password: password
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((data) => {
            console.log(data)
        })
    }

    return (
        <div className="mx-5 mt-2">
            <Link to="/signin">Sign In</Link>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={onChange} value={email} name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={onChange} value={username} name="username" type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={onChange} value={password} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={Auth} variant="primary" type="button">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}

export default SignUp;
