import { useState } from "react";

const AddUser = () =>{

    const [user, setUser] = useState({
        username: "",
        email: "",
        dob: "",
    });

    const handleInput = (e)=>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(`http://localhost:8000/api/auth/addUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })

            if(response.ok){
                const res_data = await response.json();
                console.log("Res from server ", res_data);
                setUser({ username: "", email: "", dob: ""})
            }

            console.log(response);
            
        } catch (error) {
            console.log("add user ", error);
        }
    }

    return (
        <>

        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                                src="/images/home.jpg" 
                                alt="Fill the registration form" 
                                width="400"
                                height="500"
                            />
                        </div>

                        <div className="registration-form">
                            <h1 className="main-heading"> Add User</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="dob">DOB</label>
                                    <input 
                                        type="date"
                                        name="dob"
                                        placeholder="dob"
                                        id="dob"
                                        required
                                        autoComplete="off"
                                        value={user.dob}
                                        onChange={handleInput}
                                    />
                                </div>
                                <br />

                                <button 
                                    type="submit" 
                                    className="btn btn-submit">Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    
    </>
    )
}

export default AddUser;