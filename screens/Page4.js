import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const totalSeats = 172; // Total number of seats
const seatsPerRow = 3; // Number of seats per row
const screenWidth = Dimensions.get('window').width; // Get the screen width
const seatSize = screenWidth / (seatsPerRow * 2.5); // Calculate seat size based on screen width

const numRows = Math.ceil(totalSeats / (seatsPerRow * 2));
const numCols = seatsPerRow;

const leftSideSeats = [];
const rightSideSeats = [];

// Create arrays to track the availability of seats (0 for available, 1 for occupied)
const leftSeatAvailability = [];
const rightSeatAvailability = [];

// Define column labels
const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'black',
    paddingTop: 20,
  },
  side: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seat: {
    width: seatSize,
    height: seatSize,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatOccupied: {
    backgroundColor: 'grey',
  },
  seatAvailable: {
    backgroundColor: 'darkblue',
  },
  seatSelected: {
    backgroundColor: 'grey',
  },
  seatText: {
    color: 'white',
  },
  rowNumberContainer: {
    width: 20,
    alignItems: 'center',
  },
  rowNumberText: {
    fontSize: 14,
    color: 'white',
  },
  columnLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default class Page4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLeftSeats: [], // Track the currently selected seats in the left column
      selectedRightSeats: [], // Track the currently selected seats in the right column
      storedNumber: props.groupnumber, // Store the parsed number here
      setgroupnumber: props.setgroupnumber
    };
  }

  handleLeftSeatPress(row, col) {
    const { selectedLeftSeats } = this.state;
    const isSelected = selectedLeftSeats.some((seat) => seat.row === row && seat.col === col);
    if (isSelected) {
      // Deselect the seat
      const updatedSelectedSeats = selectedLeftSeats.filter(
        (seat) => !(seat.row === row && seat.col === col)
      );
      this.setState({ selectedLeftSeats: updatedSelectedSeats });
    } else {
      // Select the seat
      this.setState({
        selectedLeftSeats: [...selectedLeftSeats, { row, col }],
      });
    }
  }

  handleRightSeatPress(row, col) {
    const { selectedRightSeats } = this.state;
    const isSelected = selectedRightSeats.some((seat) => seat.row === row &&  seat.col === col);
    if (isSelected) {
      // Deselect the seat
      const updatedSelectedSeats = selectedRightSeats.filter(
        (seat) => !(seat.row === row && seat.col === col)
      );
      this.setState({ selectedRightSeats: updatedSelectedSeats });
    } else {
      // Select the seat
      this.setState({
        selectedRightSeats: [...selectedRightSeats, { row, col }],
      });
    }
  }

  isLeftSeatSelected(row, col) {
    const { selectedLeftSeats } = this.state;
    return selectedLeftSeats.some((seat) => seat.row === row && seat.col === col);
  }

  isRightSeatSelected(row, col) {
    const { selectedRightSeats } = this.state;
    return selectedRightSeats.some((seat) => seat.row === row && seat.col === col);
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
                        : styles.seatAvailable,
                    ]}
                    onPress={() => this.handleLeftSeatPress(rowIndex, colIndex)}
                  >
                    <View>
                      <Text style={styles.seatText}>
                        {isOccupied ? 'X' : '0'}
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
                    onPress={() => this.handleRightSeatPress(rowIndex, colIndex)}
                  >
                    <View>
                      <Text style={styles.seatText}>
                        {isOccupied ? 'X' : '0'}
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
