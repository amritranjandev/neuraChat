# NeuraChat - Realtime Chat Application

NeuraChat is a realtime chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io. It supports one-on-one messaging with realtime capabilities for both text and images.

## Live Demo

The application is deployed and available at:
🔗 [https://neurachat-42ko.onrender.com/](https://neurachat-42ko.onrender.com/)

## Key Features

- **Authentication:** Sign up and login using JSON Web Tokens (JWT).
- **Realtime Messaging:** Instant text and image messaging using Socket.io.
- **Conversations List:** View a list of your current conversations.
- **Online Users:** See who’s currently online.
- **Profile Management:** Update your profile image.
- **Themes:** Choose from 32 different themes.
- **User Presence:** Users appear offline immediately after logout.
- **User Interface:**
  - Error messages display for failed actions.
  - Skeleton loaders for smoother UX.
  - Fully responsive on desktop and mobile.
- **Folder Structure:** Organized file/folder structure for frontend and backend.
- **Image Upload:** Upload images via Cloudinary.
- **Validation:** Basic field and password validation.
- **Logout:** Securely logout from the application.
- **Online Status Filter:** Show only online users in the sidebar.

## Technologies Used

### Frontend

- React.js
- Tailwind CSS
- Daisy UI
- Zustand
- React Router DOM
- React Hot Toast
- Axios
- Socket.io Client
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- jsonwebtoken (JWT)
- bcryptjs
- body-parser
- cookie-parser
- cloudinary
- Socket.io

## Setup and Installation

### Backend Setup

```bash
cd NeuraChat/backend
npm install
```

Create a `.env` file with the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

(Optional) Seed test users:

```bash
node src/seeds/user.seed.js
```

Start backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd ../frontend
npm install
npx tailwindcss init -p
```

Install required packages:

```bash
npm install react-router-dom react-hot-toast axios zustand socket.io-client @heroicons/react
```

Create `lib/axios.js` with Axios instance config:

```js
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});
export default axiosInstance;
```

Start frontend server:

```bash
npm run dev
```

## Deployment

1. **Build frontend:**

```bash
npm run build
```

2. **Serve frontend from backend:**

In Express backend:

```js
import path from "path";
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
```

3. **Deploy to your platform:** (e.g., Render, Vercel, etc.)
4. **Update frontend base URL:** Use the production backend URL in Axios config.

## Further Improvements

- Group chat support
- Advanced error handling
- Unit and integration testing
- UI/UX enhancements
- Performance optimization

## License

This project is licensed under the [MIT License](./LICENSE).
