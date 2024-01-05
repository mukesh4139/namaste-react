import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
  }
  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          Logged IN User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Akshay (class)"} location={"Dehradun (class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <UserClass name={"Akshay (class)"} location={"Dehradun (class)"} />
//     </div>
//   );
// };

export default About;
