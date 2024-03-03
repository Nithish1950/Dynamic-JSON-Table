import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StdCreate = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [department, departmentchange] = useState("");
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const stddata = { name, email, phone, department };


        fetch("http://localhost:8000/student", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(stddata)
        }).then((res) => {
           
            navigate('/');
            
            alert('Saved Successfully.')
            console.log(res);
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Add Student</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {/* <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>

                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required placeholder='Student name' value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                        
                                        </div>

                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type='email' placeholder='student@mail.com' value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                        </div>

                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} type="number" placeholder='9087654321'  onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                        </div>

                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Department</label>
                                            <input placeholder='Mech,ECE,CSE' value={department} onChange={e => departmentchange(e.target.value)} className="form-control"></input>
                                        </div>

                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Cancel</Link>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );

}

export default StdCreate; 