import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const StdEdit = () => {
    const { stdid } = useParams();
    // const [stddata, stddatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/student/" + stdid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            emailchange(resp.email);
            phonechange(resp.phone);
            departmentchange(resp.department);

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [department, departmentchange] = useState("");
    // const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const stddata={id,name,email,phone,department};
       

        fetch("http://localhost:8000/student/" +stdid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(stddata)
        }).then((res) => {
            navigate('/');
            alert('Saved Successfully.')

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
                            <h2> Edit Student Detials</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Id</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>

                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                     {name.length==0 && validation && <span className="text-danger">Enter the Name</span>}
                                    </div>

                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>

                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>

                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Department</label>
                                        <input value={department} onChange={e => departmentchange(e.target.value)} className="form-control"></input>
                                    </div>

                                </div>
                                <div className="col-lg-12 mt-3">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
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

export default StdEdit; 