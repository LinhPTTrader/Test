

import React from "react";

class Infocarcomponent extends React.Component {
    // Thong tin Car
    state = {
        name: 'Mecedes',
        model: 'C300',
        price: 5000
    }
    changeNameCar = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    submitCar = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {

        return (
            <div style={{ paddingLeft: "200px" }}>
                <form onSubmit={
                    (event) => {
                        this.submitCar(event)
                    }
                }>
                    <label>Name</label><br />
                    <input onChange={(event) => {
                        this.changeNameCar(event)
                    }} /> <br />
                    <label>Model</label><br />
                    <input /> <br />
                    <label>Price</label><br />
                    <input />
                    <br /><br />
                    <button>Update</button>
                </form>
                <h1>Name: {this.state.name}</h1>
                <h1> Model: {this.state.model} </h1>
                <h1>Price: {this.state.price} </h1>
            </div>
        )

    }
}

export default Infocarcomponent;