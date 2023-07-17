# Slack

## Description

Provide a brief description of your project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Dockerization](#dockerization)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
# Clone the repository
git clone https://github.com/mhamza415/slack.git

# Navigate to the project directory
cd slack

# Install dependencies
pnpm install
# Run the application
pnpm run dev

## API Documentation

### User Routes

#### Login

- **Route:** POST /api/user/login
- **Description:** Logs in a user.
- **Request Body:**
  - email: User's email address.
  - password: User's password.
- **Response:**
  - Success: Returns the user's ID, email, role, and authentication token.
  - Error: Returns an error message if the login fails.

#### Register

- **Route:** POST /api/user/register
- **Description:** Registers a new user.
- **Request Body:**
  - name: User's name.
  - email: User's email address.
  - password: User's password.
- **Response:**
  - Success: Returns the newly created user's ID and email.
  - Error: Returns an error message if the registration fails.


### Workspace Routes

#### Create Workspace

- **Route:** POST /api/workspace/create
- **Description:** Creates a new workspace.
- **Request Body:**
  - w_name: Workspace name.
  - token: User authentication token.
- **Response:**
  - Success: Returns the created workspace ID, name, and other details.
  - Error: Returns an error message if the creation fails.


### Message Routes

#### Send Message

- **Route:** POST /api/message/send
- **Description:** Sends a message to a user.
- **Request Body:**
  - to: User ID to send the message to.
  - message: The message content.
- **Response:**
  - Success: Returns a success message if the message is sent.
  - Error: Returns an error message if the sending fails.

## Dockerization

The Docker image for this project is available on Docker Hub.

Repository: [mhamza415/slack-slack](https://hub.docker.com/repository/docker/mhamza415/slack-slack)
Image Tag: latest

You can use the following command to pull the Docker image:


docker pull mhamza415/slack-slack:latest

For further details contact.
