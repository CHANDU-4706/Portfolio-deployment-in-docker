# Portfolio-deployment-in-docker
I have deployed my portfolio website in docker in wsl integration(ubuntu).
# 🚀 Chandu's Portfolio (Dockerized Deployment)

This is a personal portfolio web application, containerized using Docker for easy deployment and sharing.
---
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/c5fe5c20-1914-44fa-87da-f98730007fe7" />


<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/7553037b-f525-4ca4-8c26-f0f1a9cef6a7" />

## 📁 Navigate to Project Directory

Before anything, make sure you're in the correct directory:

### If using WSL (Ubuntu):

**```bash
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
Copy**
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


project:
  name: "Chandu's Portfolio"
  description: "A personal portfolio website containerized using Docker."
  author:
    name: "B. Chandrakanth"
    university: "Lovely Professional University"
    linkedin: "https://www.linkedin.com/in/boya-chandrakanth-a74403252/"
  tech_stack:
    - React or Next.js (Vercel version)
    - Vite
    - Docker
    - HTML
    - CSS
    - JavaScript

navigation:
  wsl_path: "/mnt/c/Users/CHANDU/OneDrive/Desktop/chandu-portfolio"
  instructions:
    - step: "Open WSL (Ubuntu Terminal)"
    - step: "Navigate to your project folder"
      command: "cd /mnt/c/Users/CHANDU/OneDrive/Desktop/chandu-portfolio"

docker:
  build:
    command: "docker build -t chandu-portfolio ."
  run:
    command: "docker run -d -p 3000:3000 --name chandu-portfolio-container chandu-portfolio"
    port: 3000
    access_url: "http://localhost:3000"
  management:
    stop: "docker stop chandu-portfolio-container"
    start: "docker start chandu-portfolio-container"
    remove: "docker rm -f chandu-portfolio-container"

dev_environment:
  install_dependencies: "npm install"
  run_locally: "npm run dev"
  default_dev_port: 5173

filesystem_structure:
  root: "chandu-portfolio/"
  contents:
    - Dockerfile
    - public/
    - src/
    - package.json
    - README.md
    - node_modules/

license:
  type: "MIT"

notes:
  - "Make sure port 3000 is not in use before running the Docker container."
  - "Always be in the correct path when executing Docker commands inside WSL."
  - "You can access the running site via any browser using localhost."


👨‍💻 Author
B. Chandrakanth
📍 Lovely Professional University
🔗 https://www.linkedin.com/in/boya-chandrakanth-a74403252/

📢 License
This project is licensed under the MIT License.
