
# X Clone Server/Backend

This project provides the backend services for X Clone, a web application designed to replicate core features and user interface elements similar to a popular social platform. The backend is responsible for user management, content handling, and ensuring a secure and scalable experience. It highlights expertise in server-side development using modern technologies and practices.

## Features

- User Authentication: Secure user registration, login, and profile management with robust verification processes at each step using JSON Web Tokens (JWT) and Bcrypt for password hashing.
- Profile Management: Users can create, update, and edit their profiles, including profile pictures and personal information.
- Content Management: Support for posting, liking, and managing content, including uploading images and handling related metadata.
- Follow System: Users can follow and unfollow other profiles, with real-time updates and notifications.
- Image Storage: Integration with Cloudinary for efficient and scalable image storage and retrieval.
- Verification: Ensures proper verification at every critical step of user interaction and content management.
## Tech Stack and Libraries

**Server:** Node, Express, Mongoose, JsonWebToken, Bcrypt JS, Cookie-Parser, Cloudinary, multer

**Database:** MongoDB

**Client:** React with Vite, TailwindCSS, Google Firebase, axios, react-icons
## Run on your System

Clone the project

```bash
git clone https://github.com/whoshriyansh/x_webapp_clone_server server
```

Go to the project directory

```bash
cd server
```

Install dependencies

```bash
npm install
```

Start the server in Development Env.

```bash
npm run dev
```

Start the server in Production Env.

```bash
npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`  

`PORT` 

`CLOUDINARY_CLOUD_NAME`

`CLOUDINARY_API_KEY`

`CLOUDINARY_API_SECRET`

`JWT_SECRET`

To generate 64 bytes JWT_SECRET String 

Open Terminal
```bash
node
```
After entering in the node environment Copy and paste this line.

```bash
require('crypto').randomBytes(32).toString('hex')
```
## Authors

- [@whoshriyansh](https://www.linkedin.com/in/whoshriyansh/)
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-orange?style=for-the-badge&logo=ko-fi&logoColor=white)](https://whoshriyansh.vercel.app/)

[![linkedin](https://img.shields.io/badge/LinkedIn-0A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/whoshriyansh/)

[![twitter](https://img.shields.io/badge/X-000000.svg?style=for-the-badge&logo=X&logoColor=white)](https://x.com/whoshriyansh)

[![Instagram](https://img.shields.io/badge/Instagram-E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/whoshriyansh)
