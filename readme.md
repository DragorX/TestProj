# My App

This repository contains the source code for My App, a microservice-based application that includes a decoder microservice and a REST API.

## Prerequisites

Before running the Docker container, make sure you have the following prerequisites installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)

## Build the Docker Container

To build the Docker container, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/DragorX/myapp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd myapp
   ```

3. Build the Docker container using the provided Dockerfile:

   ```bash
   docker build -t myapp .
   ```

   This command will build the Docker container and tag it as `myapp`.

## Run the Docker Container

To run the Docker container and start the microservices, follow these steps:

1. Run the Docker container using the following command:

   ```bash
   docker run -p 3000:3000 myapp
   ```

   This command will start the Docker container and map port 3000 from the container to port 3000 on your local machine.

2. Access the REST API:

   Open your web browser and visit `http://localhost:3000`. You should see the running REST API.

3. Usage of solution:

   For powershall:

   ```bash
   Invoke-RestMethod -Method POST -Uri "http://localhost:3000/decode" -Headers @{"Content-Type" = "application/json"} -Body '{"payload": "cbb409c401990109857fff"}'
   ```

   For other terminals:

   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"payload": "cbb409c401990109857fff"}' http://localhost:3000/decode
   ```

## Stop the Docker Container

To stop the Docker container, press `Ctrl + C` in the terminal where the container is running.

## Configuration

The configuration for the microservices can be found in the `server.js` file. You can modify the port number or any other configuration settings as needed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
