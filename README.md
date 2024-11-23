# Real-Time Chat App (MERN Stack)  

A feature-rich real-time chat application built with the MERN stack, designed for seamless and secure communication. This project includes live user status, messaging, and robust authentication, all styled with modern frameworks.  

---

## Demo  

Experience the app by following the tutorial video:  
[Build and Deploy a Real-Time Chat App | JWT, Socket.IO](https://www.youtube.com/watch?v=HwCqsOis894)

---

## Key Features  

- **Modern Tech Stack**: Built using MongoDB, Express.js, React.js, and Node.js.  
- **Secure Authentication**: Login and signup functionality with encrypted token-based authentication using JWT.  
- **Real-Time Messaging**: Chat in real-time, enabled by WebSocket connections through Socket.IO.  
- **Live User Status**: Displays online and offline status dynamically using React Context and Socket.IO.  
- **Global State Management**: Simplified state handling powered by Zustand.  
- **Error Handling**: Resilient error management for both client-side and server-side operations.  
- **Beautiful UI**: Styled with TailwindCSS and Daisy UI for a clean and responsive design.  
- **Free Deployment Ready**: Learn how to deploy the app on free hosting platforms with detailed steps.  

---

## Installation and Setup  

### Prerequisites  
Ensure you have the following installed on your machine:  
- Node.js  
- npm or yarn  
- MongoDB (local installation or cloud-based like MongoDB Atlas)  

### 1. Clone the Repository  
```bash
git clone https://github.com/your-username/mern-chat-app.git
cd mern-chat-app
```

### 2. Configure Environment Variables  
Create a `.env` file in the project’s root directory and add the following:  
```env
PORT=5000
MONGO_DB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
NODE_ENV=development
```

### 3. Install Dependencies  
Run the following command to install all necessary dependencies:  
```bash
npm install
```

### 4. Build the Application  
Prepare the application for production:  
```bash
npm run build
```

### 5. Start the Server  
Run the application locally:  
```bash
npm start
```

The server will start on `http://localhost:5000`.

---

## Project Structure  

```plaintext
📂 mern-chat-app  
├── 📁 client         # Frontend React application  
├── 📁 server         # Backend Node.js application  
├── 📂 public         # Static files and assets  
├── .env              # Environment variables  
├── package.json      # Dependency list and scripts  
└── README.md         # Project documentation  
```

---

## Deployment  

You can deploy this application for free on platforms such as:  
- **Heroku**  
- **Render**  
- **Vercel**  

Follow the steps in the video tutorial to deploy your app with a production build.  

---

## Credits  

This project is inspired by the YouTube tutorial:  
[Build and Deploy a Real-Time Chat App | JWT, Socket.IO](https://www.youtube.com/watch?v=HwCqsOis894).  

---

## License  

This project was developed for learning purposes. All rights and credits go to the original creator of the tutorial.  
