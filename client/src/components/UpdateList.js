import React from "react";
//import AuthApi from "../utils/AuthApi";
import history from "../history";
import axios from "axios";
import eq2 from "../eq2.png";
import admin from "../admin.jpg"
import blk from "../blk.jpg"

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

  postLike = (id,star) => {
    console.log(id);
    console.log(star);
    axios
      .post("updates/auth/likes", {
        id: id,
        star: star,
      })
      .then(function () {
        console.log("msg from frontend");
        //console.log(res.data.auth);
        history.push("/getupdates");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // renderItems() {
  //   return this.state.list.map((item) => {
  //     return (
  //       <div
  //         className="item"
  //         key={item._id}
  //         style={{
  //           border: "1px solid black",
  //           backgroundColor: "#AAF0D1",
  //           margin: "10px",
  //           padding: "10px",
  //         }}
  //       >
  //         <div className="content">
  //           <div className="description">
  //             <i class="large calendar alternate outline icon"></i>
  //             <h3 style={{ color: "black" }}>{item.name}</h3>
  //
  //             <h5>Start Date :</h5> {item.startDate}
  //
  //             <h5>End Date :</h5> {item.endDate}
  //             <h4>{item.star}</h4>
  //             <br />
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  renderItems(){
    console.log(this.state.list);
    return this.state.list.map((item) => {


    return (
      <div class="ui card" key={item._id}>
    <div class="content">
    <div class="right floated meta">14h</div>
    <img class="ui avatar image" src={admin}/><h3> {item.name}</h3>
    <hr/>
    <h5>Start Date : {item.startDate.split('T')[0]}  &nbsp; &nbsp; End Date : {item.endDate.split('T')[0]} </h5>


  </div>
  <div class="image">
    <img/>
  </div>
  <div class="content">
    <span class="right floated">
    <button style={{backgroundColor:"white"}} onClick={() => this.postLike(item._id,item.star)}>  <i class="heart outline like icon"></i>
    {item.star}
    </button>
    </span>

  </div>
  <div class="extra content">
    <div class="ui large transparent left icon input">
      <i class="heart outline icon"></i>
      <input type="text" placeholder="Add Comment..."/>
    </div>
  </div>
</div>

);
  });
}

  render() {
    //  console.log(this.props);
    return (
      <div className="back"   style={{ backgroundImage: `url(${blk})`,padding:"20px",height:"100%",width:"100%"}}>
        <div className=" ui container">
          <h1
            style={{ textAlign: "center", fontSize: "50px", fontWeight: "900" }}
          >
            Update list
          </h1>
          <div className="ui three stackable cards">{this.renderItems()}
          <br/>
          <br/></div>
        </div>
      </div>
    );
  }
}

export default UpdateList;
