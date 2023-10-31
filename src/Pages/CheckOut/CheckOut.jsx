import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const CheckOut = () => {

  const service = useLoaderData();
  const { price, title, _id , img} = service;
  const {user} = useContext(AuthContext);

  const handleBookServices = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const booking ={
      customerName: name,
      email,
      date,
      service: title,
      img,
      service_id:_id,
      price:price

    }
    console.log(booking);

    fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'

      },
      body: JSON.stringify(booking)
    }
    )
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert("your service have been booked")
      }
    })
    
  }
  return (
    <div>
      <h2>Book Service: {title}</h2>
      <form onSubmit={handleBookServices}  className="card-body">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            name="name"
            placeholder="name"
            defaultValue={user?.displayName}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            defaultValue={user?.email}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input
            type="text"
            name="amount"
            defaultValue={'$'+ price}
            className="input input-bordered"
            required
          />
        </div>
      </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
