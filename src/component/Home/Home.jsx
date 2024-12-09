import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        {this.props.products.map((data) => (
          <div
            key={data.id}
            className="d-flex justify-content-between align-items-center bg-info-subtle
 p-2 my-3"
          >
            <h2 className="px-2">
              <span>{data.id}</span>- {data.name}
            </h2>
            <div className="d-flex justify-content-center align-items-center gap-5 border fs-5">
            <p>{data.price}</p>
            <p>{data.items}</p>
            </div>
            
            <div className="d-flex gap-3">
              <button onClick={()=> this.props.increment(data)} className="btn btn-primary">increment</button>
              <button onClick={()=>this.props.decrement(data)} className="btn btn-danger">decrement</button>
              <button onClick={()=>this.props.delete(data)} className="btn btn-dark">delete</button>
            </div>
            <div className="fs-4">
                <p>Total Price: {data.price * data.items}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Home;
