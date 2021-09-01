import React from "react";
//import AuthApi from "../utils/AuthApi";
import axios from "axios";
import eq2 from "../eq2.png";

class UpdateList extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.callApi()
      .then((res) => {
        this.setState({ list: res.data });
        console.log(res.data);
        console.log(this.state.list);
      })
      .catch((err) => console.log(err));

    //console.log(this.state.data);
  }

  callApi = async () => {
    const response = await axios.get("/updates/auth/getupdates");
    //  const body = await response.json();
    if (response.status !== 200) {
      console.log("some error");
    }

    return response;
  };

  renderItems() {
    return this.state.list.map((item) => {
      return (
        <div
          className="item"
          key={item._id}
          style={{
            border: "1px solid black",
            backgroundColor: "#AAF0D1",
            margin: "10px",
            padding: "10px",
          }}
        >
          <div className="content">
            <div className="description">
              <i class="large calendar alternate outline icon"></i>
              <h3 style={{ color: "black" }}>{item.name}</h3>

              <h5>Start Date :</h5> {item.startDate}

              <h5>End Date :</h5> {item.endDate}
              <br />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    //  console.log(this.props);
    return (
      <div className="back" style={{ backgroundColor:"#2554C7" }}>
        <div className="container">
          <h1
            style={{ textAlign: "center", fontSize: "50px", fontWeight: "900" }}
          >
            Update list
          </h1>
          <div >{this.renderItems()}
          <br/>
          <br/></div>
        </div>
      </div>
    );
  }
}

export default UpdateList;
