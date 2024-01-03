# Project Name

This repository contains a React app along with a JSON server.

## Project Setup

### Prerequisites
- Node.js and npm installed

### Running the JSON Server
1. **Navigate to the `json-server` directory.**
2. **Install JSON Server globally if not already installed:** `npm install -g json-server`.
3. **Start the JSON Server:** `json-server --watch db.json --port 3001`.
4. **Verify the server is running by visiting** `http://localhost:3001` **in your browser.**

### Running the React App
1. **Navigate to the root directory of the React app.**
2. **Install dependencies:** `npm install`.
3. **Start the React app:** `npm start`.
4. **Open** `http://localhost:3000` **in your browser to view the app.**

## Usage

- The React app interacts with the JSON Server to fetch and manipulate data.
- APIs are available at `http://localhost:3001` (assuming the JSON Server is running).

## Folder Structure

- `json-server/`: Contains the JSON server files.
- `react-app/`: Contains the React application files.

## Additional Notes

- Make sure both the JSON Server and React app are running simultaneously for full functionality.
- Update the `db.json` file in the `json-server/` directory to modify data served by the JSON Server.
