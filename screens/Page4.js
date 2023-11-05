import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const totalSeats = 172; // Total number of seats
const seatsPerRow = 3; // Number of seats per row
const screenWidth = Dimensions.get("window").width; // Get the screen width
const seatSize = screenWidth / (seatsPerRow * 2.5); // Calculate seat size based on screen width

const numRows = Math.ceil(totalSeats / (seatsPerRow * 2));
const numCols = seatsPerRow;

const leftSideSeats = [];
const rightSideSeats = [];

// Create arrays to track the availability of seats (0 for available, 1 for occupied)
const leftSeatAvailability = [];
const rightSeatAvailability = [];
const recommendedSeats = [];

for (let row = 0; row < numRows; row++) {
  const leftRow = [];
  const rightRow = [];
  for (let col = 0; col < numCols; col++) {
    // Simulate seat availability (0 for available, 1 for occupied)
    const isOccupied = Math.random() < 0.5 ? 0 : 1;
    leftRow.push(isOccupied);
    rightRow.push(isOccupied);
    leftSeatAvailability.push(isOccupied);
    rightSeatAvailability.push(isOccupied);
  }
  leftSideSeats.push(leftRow);
  rightSideSeats.push(rightRow);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "black",
    paddingTop: 20,
  },
  side: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end", // Align to the right
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seat: {
    width: seatSize,
    height: seatSize,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Adjust the borderRadius for soft edges
  },
  seatOccupied: {
    backgroundColor: "grey",
  },
  seatAvailable: {
    backgroundColor: "darkblue",
  },
  seatFound: {
    backgroundColor: "grey",
    borderWidth: 2, // Add a border width
    borderColor: "white", // Set the border color to white
  },
  seatText: {
    color: "white",
  },
  rowNumberContainer: {
    width: 20,
    alignItems: "flex-end", // Align row numbers to the right
  },
  rowNumberText: {
    fontSize: 14,
    color: "white",
  },
  seatSelected: {
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "white",
  },
  
});

export default class Page4 extends Component {
// Helper method to select seats
constructor(props) {
  super(props);
  const selectedLeftSeats = this.selectSeats();
  // const {seatsToOccupy }= this.props.params
  // console.log(seatsToOccupy)
  this.state = {
    selectedLeftSeats,
    selectedRightSeats: [], // Track the currently selected seats in the right column
  };
  this.foundSeats = selectedLeftSeats;
}

  handleLeftSeatPress(row, col) {
    const { selectedLeftSeats } = this.state;
    const isSelected = selectedLeftSeats.some(
      (seat) => seat.row === row && seat.col === col
    );
  
  
    if (isSelected) {
      // Deselect the seat
      const updatedSelectedSeats = selectedLeftSeats.filter(
        (seat) => !(seat.row === row && seat.col === col)
      );
      this.setState({ selectedLeftSeats: updatedSelectedSeats });
  
      if (this.isFoundSeat(row, col)) {
        // If it's a found seat, mark it as found again
        this.foundSeats.push({ row, col });
      }
    } else if (selectedLeftSeats.length <= 5) {
      // Check if less than 5 seats are selected
      // Select the seat
      this.setState({
        selectedLeftSeats: [...selectedLeftSeats, { row, col }],
      });
  
      // if (this.isFoundSeat(row, col)) {
      //   // If it's a found seat, remove it from found seats
      //   this.foundSeats = this.foundSeats.filter(
      //     (seat) => !(seat.row === row && seat.col === col)
      //   );
      // }
    }
  }

  handleRightSeatPress(row, col) {
    const { selectedRightSeats } = this.state;
    const isSelected = selectedRightSeats.some(
      (seat) => seat.row === row && seat.col === col
    );

    if (isSelected) {
      // Deselect the seat
      const updatedSelectedSeats = selectedRightSeats.filter(
        (seat) => !(seat.row === row && seat.col === col)
      );
      this.setState({ selectedRightSeats: updatedSelectedSeats });
    } else if (selectedRightSeats.length < 5) {
      // Check if less than 5 seats are selected
      // Select the seat
      this.setState({
        selectedRightSeats: [...selectedRightSeats, { row, col }],
      });
    }
  }

  isLeftSeatSelected(row, col) {
    const { selectedLeftSeats } = this.state;
    return selectedLeftSeats.some(
      (seat) => seat.row === row && seat.col === col
    );
  }

  isRightSeatSelected(row, col) {
    const { selectedRightSeats } = this.state;
    return selectedRightSeats.some(
      (seat) => seat.row === row && seat.col === col
    );
  }
  // Helper method to select consecutive available seats


// Helper method to select seats
selectSeats() {
  const selectedSeats = [];
  let consecutiveSeatsCount = 0;
  
  for (let row = 0; row < leftSideSeats.length; row++) {
    for (let col = 0; col < leftSideSeats[row].length; col++) {
      // Check if the seat is available (0 for available)
      if (leftSideSeats[row][col] === 0) {
        // Select the seat and update the state
        selectedSeats.push({ row, col });
        consecutiveSeatsCount++;
        
        if (consecutiveSeatsCount === 5) {
          // If five consecutive seats are selected, return the selected seats
          return selectedSeats;
        }
      } else {
        // If an occupied seat is encountered, reset the consecutiveSeatsCount
        consecutiveSeatsCount = 0;
        selectedSeats.length = 0;
      }
    }

    // Check if the seats within two rows have been found
    if (row >= 2) {
      // If not, remove the earliest seat from the selection
      if (selectedSeats.length > 2) {
        const earliestSeat = selectedSeats.shift();
        consecutiveSeatsCount--;
      }
    }
  }
  
  return selectedSeats; // Return the selected seats found so far
}

isFoundSeat(row, col) {
  return this.foundSeats.some((seat) => seat.row === row && seat.col === col);
}


  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.side}>
            {leftSideSeats.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((isOccupied, colIndex) => (
                 <TouchableOpacity
                 key={colIndex}
                 style={[
                   styles.seat,
                   isOccupied
                     ? styles.seatOccupied
                     : this.isLeftSeatSelected(rowIndex, colIndex)
                     ? styles.seatSelected
                     : this.isFoundSeat(rowIndex, colIndex)
                     ? styles.seatFound // Apply the "seatFound" style for found seats
                     : styles.seatAvailable,
                 ]}
                 onPress={() => this.handleLeftSeatPress(rowIndex, colIndex)}
               >
                 <View>
                   <Text style={styles.seatText}>
                     {isOccupied ? "X" : "0"}
                   </Text>
                 </View>
               </TouchableOpacity>
                ))}
                <View style={styles.rowNumberContainer}>
                  <Text style={styles.rowNumberText}>{rowIndex + 1}</Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.side}>
            {rightSideSeats.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((isOccupied, colIndex) => (
                  <TouchableOpacity
                    key={colIndex}
                    style={[
                      styles.seat,
                      isOccupied
                        ? styles.seatOccupied
                        : this.isRightSeatSelected(rowIndex, colIndex)
                        ? styles.seatSelected
                        : styles.seatAvailable,
                    ]}
                    onPress={() =>
                      this.handleRightSeatPress(rowIndex, colIndex)
                    }
                  >
                    <View>
                      <Text style={styles.seatText}>
                        {isOccupied ? "X" : "0"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}
