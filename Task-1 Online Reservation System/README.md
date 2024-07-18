# OIBSIP-Project1 : Online Reservation System

__Oasis Infobyte Internship - Task 1 :-__

Completed Task 1 of name Online Reservation System in Java Programming language using Eclipse IDE.

Steps Required : 

1. First, the code creates an array of boolean values called seats with a length of 10. Each element in the array represents a seat, and the value true indicates that the seat is reserved, while false indicates that the seat is available.

2. The main method sets up a loop that displays a menu of options to the user and gets their input. The user can choose to view the current seat map, reserve a seat, cancel a reservation, or exit the program.

3. The viewSeatMap method simply prints the current state of the seats array to the console, with an "X" indicating a reserved seat and the seat number indicating an available seat.

4. The reserveSeat method prompts the user to enter a seat number, checks if the input is valid, and if the seat is available, sets the corresponding element in the seats array to true to reserve the seat.

5. The cancelReservation method works similarly to the reserveSeat method, but instead sets the corresponding element in the seats array to false to cancel the reservation
