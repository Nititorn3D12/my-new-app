import React, { Component } from "react";

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {date : new Date()};
    }
    
    componentDidMount(){
        this.timeID = setInterval(() => this.tick(),1000);
    }
    
    componentDidUpdate(){
        
    }
    
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    
    
    tick() {
        this.setState({date: new Date()});
    }
    
    render  (){ 
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-success">Ku CAFE<img style={{style : 50}} src ="/images/logo/logo.png" alt="" /> </h1>
                    </div>   
                    <div className="col-md-4 text-right">
                    <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>                
            </div>
        )
    }
}



export default Header;