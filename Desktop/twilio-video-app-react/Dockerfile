# Use an official Node runtime as the parent image

FROM node:14 

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package.json /app/
COPY . /app
# COPY . /app
RUN npm install
RUN npm run build
# RUN npm run build2





ENV PORT=8080
ENV HOST=0.0.0.0
# ENV CONTAINER=true
# ENV DEPLOY_ENV=local

# # Make the container's port 80 available to the outside world (actually this does nothing, just documentation)
EXPOSE 8080

# default cmd when the container launches
CMD ["npm", "run", "serve"]

# specify another command if you want to run tests
# docker run -p 8080:80 -d --name myapp -v ~/Desktop/ocps/ocps-backend:/app ocps-backend:latest tail -f /dev/null