
FROM node:lts-buster

Install Git and other dependencies
RUN apt-get update && \
    apt-get install -y \
    git \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

Copy package.json and install dependencies
COPY package.json .
RUN npm install && npm install -g qrcode-terminal pm2

Copy application code
COPY . .

Expose port and set command
EXPOSE 3000
CMD ["pm2-runtime", "start", "index.js"]
