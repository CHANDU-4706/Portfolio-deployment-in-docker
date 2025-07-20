# Node.js image antaru ra babu
FROM node:18-alpine

# working directory
WORKDIR /app

# Copy cheyadam
COPY package.json pnpm-lock.yaml ./

# npm vercel ki
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# migithavi copy cheyadaniki
COPY . .

# Build the project
RUN pnpm build

# Expose the port Next.js will run on
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]

