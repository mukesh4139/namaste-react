import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
  }
  render() {
    return (
      <div>
        <h1>About Class Component</h1>
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
