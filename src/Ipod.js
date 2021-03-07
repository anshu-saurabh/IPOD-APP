import React from "react";
import { AiOutlineFastBackward } from "react-icons/ai";
import { AiOutlineFastForward } from "react-icons/ai";
import { AiOutlinePause } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import Screen from "./Screen";
class Ipod extends React.Component {
  render() {
    return (
      <div style={styles.ipodContainer}>
        <audio className="audio-element"></audio>
        <Screen />
        <div id="inner-container" style={styles.wheel}>
          <div style={styles.buttonContainer}>
            <div style={styles.menuButton}>
              <AiOutlineBars style={styles.image} />
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div style={styles.middleButtons}>
              <AiOutlineFastBackward style={styles.image} />
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #8c8181, transparent)",
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50%",
                }}
              ></div>
              <AiOutlineFastForward style={styles.image} />
            </div>
          </div>

          <div style={styles.buttonContainer}>
            <div style={styles.playButton}>
              <IoMdPlay style={styles.image} />
              &nbsp;
              <AiOutlinePause style={styles.image} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  ipodContainer: {
    height: "33rem",
    width: "20rem",
    backgroundImage: "radial-gradient(#adb1b5, #4d4f50)",
    margin: "4rem auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "24px",
  },
  wheel: {
    width: "75%",
    height: "40%",
    margin: "1rem auto",
    backgroundColor: "#4b4e52",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "85%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuButton: {
    alignSelf: "center",
  },
  playButton: {
    alignSelf: "center",
  },
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    alignSelf: "center",
    fontSize: "1.5rem",
    color: "white",
  },
};
export default Ipod;
