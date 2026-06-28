# 🚀 OneChat

A modern full-stack chat application powered by **React**, **Vite**, **Express**, and **Cerebras AI**. OneChat delivers intelligent, real-time conversations with AI-driven responses.
[Visit the Website](onechat.online)

## 📋 Overview

OneChat is a contemporary chat application that combines a sleek React frontend with a robust Express backend. It leverages the **Cerebras Cloud SDK** to provide intelligent AI-powered conversations, making it a cutting-edge messaging platform.

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI library for building interactive user interfaces
- **Vite** - Lightning-fast build tool and dev server
- **React Markdown 10.1.0** - For rendering markdown messages
- **React DOM 19.1.1** - React package for working with the DOM

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.1.0** - Fast and minimalist web framework
- **Cerebras Cloud SDK** - AI integration for intelligent responses
- **CORS** - Cross-Origin Resource Sharing for frontend-backend communication
- **Dotenv** - Environment variable management

## ✨ Key Features

- 💬 **Real-time Chat** - Seamless messaging experience
- 🤖 **AI-Powered Responses** - Integrated with Cerebras AI for intelligent conversations
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 📝 **Markdown Support** - Rich text formatting in messages
- ⚡ **Fast Performance** - Built with modern tools (Vite, React 19)
- 🎨 **Modern UI** - Clean and intuitive user interface

## 📁 Project Structure

```
OneChat/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── App.jsx             # Main React component
│   │   ├── App.css             # Application styles
│   │   ├── main.jsx            # Entry point
│   │   └── ...
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   └── ...
├── server/                      # Express backend server
│   ├── server.js               # Main server file
│   ├── package.json            # Backend dependencies
│   └── ...
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Cerebras API Key** - Get it from [Cerebras](https://console.cerebras.ai)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Hemanth3247/OneChat.git
cd OneChat
```

#### 2. Setup Backend

```bash
cd server

# Install dependencies
npm install

# Create .env file
echo "CEREBRAS_API_KEY=your_api_key_here" > .env

# Start the server
npm start
```

The server will run on `http://localhost:5000` (or your configured port)

#### 3. Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Create .env file (if needed)
echo "VITE_API_URL=http://localhost:5000" > .env

# Start the development server
npm run dev
```

The application will open at `http://localhost:5173`

## 📝 Environment Variables

### Backend (.env in server/)
```
CEREBRAS_API_KEY=your_cerebras_api_key
PORT=5000
NODE_ENV=development
```

### Frontend (.env in frontend/)
```
VITE_API_URL=http://localhost:5000
```

## 🎯 Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm start        # Start the server
npm test         # Run tests (when available)
```

## 🔌 API Endpoints

### POST `/api/chat`
Send a message and get an AI response

**Request:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "response": "AI generated response...",
  "timestamp": "2025-06-28T10:30:00Z"
}
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the ISC License.

## 👤 Author

**Hemanth3247** - [GitHub Profile](https://github.com/Hemanth3247)

## 🐛 Issues & Support

Found a bug or have a suggestion? Please [open an issue](https://github.com/Hemanth3247/OneChat/issues) on GitHub.

## 🚀 Future Enhancements

- [ ] User authentication
- [ ] Chat history persistence
- [ ] Multiple AI model support
- [ ] File upload capabilities
- [ ] Dark mode
- [ ] Message editing and deletion
- [ ] User typing indicators

---

**Built with ❤️ using React and Cerebras AI**

For more information, visit the [GitHub repository](https://github.com/Hemanth3247/OneChat)
