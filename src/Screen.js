import React from "react";
class Screen extends React.Component {
  render() {
    return <div style={styles.screen} id="screen-container"></div>;
  }
}
const styles = {
  screen: {
    height: "50%",
    width: "95%",
    borderRadius: "12px",
    backgroundColor: "white",
    border: "2px solid black",
    marginTop: "1rem",
  },
};

export default Screen;
