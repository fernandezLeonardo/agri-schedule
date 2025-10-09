# AgriScheduler

AgriScheduler is a web application designed to help users manage agricultural schedules efficiently. This project provides a user-friendly interface for logging in and accessing personalized dashboards.

## Features

- User authentication with a login page.
- Dashboard displaying user-specific information.
- Reusable UI components for buttons and input fields.

## Project Structure

```
agri-schedule
├── src
│   ├── app
│   │   ├── globals.css       # Global styles for the application
│   │   ├── page.tsx          # Main entry point for the application
│   │   ├── login
│   │   │   └── page.tsx      # Login page implementation
│   │   └── dashboard
│   │       └── page.tsx      # Dashboard page implementation
│   ├── components
│   │   └── ui
│   │       ├── Button.tsx     # Reusable button component
│   │       └── Input.tsx      # Reusable input component
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Installation

Before you begin, make sure you have [Node.js](https://nodejs.org/) and npm installed on your system.

- To check if Node.js and npm are installed, run:
  ```
  node -v
  npm -v
  ```
- If not installed, download and install from [nodejs.org](https://nodejs.org/).

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd agri-schedule
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```
or
```
npm start
```
(depending on your setup; most Next.js projects use `npm run dev`)

Visit `http://localhost:3000` in your browser to access the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.