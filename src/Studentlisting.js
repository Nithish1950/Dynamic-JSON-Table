import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Studentlisting = () => {
    const [stddata, stddatachange] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const navigate = useNavigate();

    const LoadEdit = (id) => {
        navigate("/student/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove')) {

            fetch("http://localhost:8000/student/" + id, {
                method: "DELETE"
            }).then((res) => {
                return res.json();
                
                //
                // stddatachange(res);
                
            
            }).then((resp) =>{
                // stddatachange(resp);
                setDeleted(true);
                alert('Removed Successfully.')
            }).catch((err) => {
                console.log(err.message);
            })
        }
    }


    useEffect(() => {
        fetch("http://localhost:8000/student").then((res) => {
            return res.json();
        }).then((resp) => {
            stddatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [deleted])

    return (
        <div className="container">
            <div className="card mt-5">
                <div className="card-title">
                    <h2 className="mt-3">Students Listing</h2>
                    <div className="divbtn text-right">
                        <Link to="student/create" className="btn btn-success">Add New</Link>
                    </div>
                    
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                {/* <td>Id</td> */}
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Department</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {stddata && stddata.length === 0 ? <tr>
                                        <td colSpan={5}>'No Data to show' </td> 
                                        </tr>
                                        :
                                stddata.map(item => (
                                    <tr key={item.id}>
                                        {/* <td>{item.id}</td> */}
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.department}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a></td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );

}
export default Studentlisting;