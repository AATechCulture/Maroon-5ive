import React, { useState, useEffect } from 'react';
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
    alignItems: 'flex-end', // Align to the right
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
    borderRadius: 10, // Adjust the borderRadius for soft edges
  },
  seatOccupied: {
    backgroundColor: 'grey',
  },
  seatAvailable: {
    backgroundColor: 'darkblue',
  },
  seatSelected: {
    backgroundColor: 'grey',
    borderWidth: 2,      // Add a border width
    borderColor: 'white', // Set the border color to white
  },
  seatText: {
    color: 'white',
  },
  rowNumberContainer: {
    width: 20,
    alignItems: 'flex-end', // Align row numbers to the right
  },
  rowNumberText: {
    fontSize: 14,
    color: 'white',
  },
});

export default function Page4({ route }){
  const { seatsToOccupy } = route.params;
  const [selectedLeftSeats, setSelectedLeftSeats] = useState([]);
  const [selectedRightSeats, setSelectedRightSeats] = useState([]);

  useEffect(() => {
    // Additional logic to print information to the screen
    const infoToPrint = 'Welcome to Page4!'; // Replace with the information you want to print
    // You can use this infoToPrint in your component.
  }, []);
  

  const handleLeftSeatPress =(row, col)=>{
    const { selectedLeftSeats } = this.state;
    const isSelected = selectedLeftSeats.some((seat) => seat.row === row && seat.col === col);

    if (isSelected) {
      // Deselect the seat
      const updatedSelectedSeats = selectedLeftSeats.filter(
        (seat) => !(seat.row === row && seat.col === col)
      );
      this.setState({ selectedLeftSeats: updatedSelectedSeats });
    } else if (selectedLeftSeats.length < 5) { // Check if less than 5 seats are selected
      // Select the seat
      this.setState({
        selectedLeftSeats: [...selectedLeftSeats, { row, col }],
      });
    }
  }

  const handleRightSeatPress = (row, col)=>{
    const { selectedRightSeats } = this.state;
    const isSelected = selectedRightSeats.some((seat) => seat.row === row &&  seat.col === col);

    if (isSelected) {
      // Deselect the seat
      const updatedSelectedSeats = selectedRightSeats.filter(
        (seat) => !(seat.row === row && seat.col === col)
      );
      this.setState({ selectedRightSeats: updatedSelectedSeats });
    } else if (selectedRightSeats.length < 5) { // Check if less than 5 seats are selected
      // Select the seat
      this.setState({
        selectedRightSeats: [...selectedRightSeats, { row, col }],
      });
    }
  }


// Function to check if a seat on the left side is selected
const isLeftSeatSelected = (row, col) => {
  return selectedLeftSeats.some((seat) => seat.row === row && seat.col === col);
};

// Function to check if a seat on the right side is selected
const isRightSeatSelected = (row, col) => {
  return selectedRightSeats.some((seat) => seat.row === row && seat.col === col);
};
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
                        : isLeftSeatSelected(rowIndex, colIndex)
                        ? styles.seatSelected
                        : styles.seatAvailable,
                    ]}
                    onPress={() => handleLeftSeatPress(rowIndex, colIndex)}
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
                        : isRightSeatSelected(rowIndex, colIndex)
                        ? styles.seatSelected
                        : styles.seatAvailable,
                    ]}
                    onPress={() => handleRightSeatPress(rowIndex, colIndex)}
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

