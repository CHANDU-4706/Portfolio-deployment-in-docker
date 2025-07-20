# Portfolio-deployment-in-docker
I have deployed my portfolio website in docker in wsl integration(ubuntu).
# 🚀 Chandu's Portfolio (Dockerized Deployment)

This is a personal portfolio web application, containerized using Docker for easy deployment and sharing.
---
## 📁 Navigate to Project Directory

Before anything, make sure you're in the correct directory:

### If using WSL (Ubuntu):

```bash
cd /mnt/c/Users/CHANDU/OneDrive/Desktop/chandu-portfolio
This path may differ if you moved the folder — adjust accordingly.

🐳 Run with Docker (Locally)
1. Build the Docker image
bash
Copy
Edit
docker build -t chandu-portfolio .
2. Run the Docker container
bash
Copy
Edit
docker run -d -p 3000:3000 --name chandu-portfolio-container chandu-portfolio
3. View your site
Open your browser and visit:

arduino
Copy
Edit
http://localhost:3000
📦 Project Structure
java
Copy
Edit
chandu-portfolio/
├── Dockerfile
├── public/
├── src/
├── package.json
├── ...
⚙️ Manage Docker Container
Stop the container:

bash
Copy
Edit
docker stop chandu-portfolio-container
Start it again:

bash
Copy
Edit
docker start chandu-portfolio-container
Remove it completely:

bash
Copy
Edit
docker rm -f chandu-portfolio-container
🧪 Run Without Docker (Development)
bash
Copy
Edit
npm install
npm run dev
This will usually run on http://localhost:5173 (Vite default).

🛠 Built With
React / Vite (or Next.js)

Docker

HTML / CSS / JavaScript

👨‍💻 Author
B. Chandrakanth
📍 Lovely Professional University
🔗 https://www.linkedin.com/in/boya-chandrakanth-a74403252/

📢 License
This project is licensed under the MIT License.
