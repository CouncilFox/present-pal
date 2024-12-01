# present-pal

Prompts for ChatGPT Assistance

### **1. Backend Setup and User Authentication**

**Description**: Set up the backend framework and implement user registration and login functionality with secure password handling and JWT authentication.

**Prompt**:

*"I need help setting up a Node.js backend using Express.js for my holiday shopping app. Please provide code examples and guidance on:

- Initializing the project and setting up the server.
- Connecting to a PostgreSQL database using an ORM like Sequelize or Knex.
- Implementing user registration and login endpoints.
- Securing passwords with hashing (bcrypt).
- Implementing JWT-based authentication for protected routes."*

---

### **2. Group Creation and Management**

**Description**: Implement functionality for users to create groups, invite others via links, and manage group memberships.

**Prompt**:

*"Please assist me in adding group management features to my Express.js backend. I need code examples and explanations for:

- Creating a 'Group' model and setting up the necessary database tables.
- Implementing endpoints for group creation and retrieval.
- Generating unique invitation links for groups.
- Handling the acceptance of invitations and adding users to groups.
- Managing group membership relationships between users and groups."*

---

### **3. Registry Creation and Management**

**Description**: Allow users to create and manage their gift registries within groups.

**Prompt**:

*"Help me implement registry functionality in my app's backend. Specifically, I need:

- A 'RegistryItem' model with fields like item name, description, link, etc.
- Endpoints for users to add, edit, and delete items in their registry.
- Code to associate registry items with specific users and groups.
- Validation to ensure users can only modify their own registries."*

---

### **4. Viewing and Purchasing Registry Items**

**Description**: Enable users to view other members' registries, mark items as purchased, and enforce visibility rules so owners can't see purchased statuses.

**Prompt**:

*"I need guidance on implementing the purchasing feature:

- Code for endpoints that allow users to view other members' registries within a group.
- Logic to mark registry items as purchased by a user, updating the 'purchased' status and 'purchased_by' fields.
- Middleware or business logic to ensure that registry owners cannot see the 'purchased' status of their own items.
- Updating database queries and responses to enforce these visibility rules."*

---

### **5. Frontend Development with Bootstrap**

**Description**: Build a clean and responsive user interface using Bootstrap CSS, covering all necessary pages and components.

**Prompt**:

*"Assist me in developing the frontend of my application using HTML, Bootstrap CSS, and JavaScript (or a framework like React if preferred). Please provide:

- Templates for the registration and login pages.
- Layouts for group management, including creating groups and viewing group members.
- Pages for viewing and editing registries, as well as marking items as purchased.
- Guidance on making API calls to the backend and handling responses.
- Tips on ensuring the UI is clean, intuitive, and responsive."*

---

### **6. Containerization with Docker**

**Description**: Containerize both the backend and frontend applications using Docker, preparing them for deployment.

**Prompt**:

*"Help me write Dockerfiles to containerize my Node.js backend and frontend applications. I need:

- A Dockerfile for the backend that installs dependencies and runs the server.
- A Dockerfile for the frontend that builds static assets and serves them using a lightweight web server like Nginx.
- Instructions on building and running these Docker images locally.
- Tips on optimizing the Dockerfiles for smaller image sizes and faster builds."*

---

### **7. Deployment with Kubernetes and Helm**

**Description**: Deploy the containerized applications using Kubernetes for orchestration and Helm for managing configurations.

**Prompt**:

*"I need assistance deploying my Dockerized applications using Kubernetes and Helm. Please provide:

- Guidance on writing Helm charts for deploying the backend, frontend, and PostgreSQL database.
- Examples of Kubernetes Deployment and Service configurations for each component.
- Instructions on setting up an Ingress controller for routing traffic.
- Steps to deploy the Helm charts to a Kubernetes cluster and manage them effectively."*

---

### **8. Testing and Security Best Practices**

**Description**: Implement testing strategies and enhance security across the application.

**Prompt**:

*"Please help me improve the quality and security of my application by:

- Writing unit tests for backend routes and business logic using a testing framework like Jest or Mocha.
- Implementing integration tests for API endpoints.
- Adding input validation and sanitization to prevent security vulnerabilities like SQL injection and XSS.
- Managing environment variables and secrets securely, possibly using Kubernetes Secrets.
- Setting up rate limiting and other middleware to enhance security."*

---

### **9. Logging and Monitoring**

**Description**: Set up logging and monitoring to track the application's performance and health.

**Prompt**:

*"Assist me in setting up logging and monitoring for my application:

- Implement logging in the backend using a library like Winston or Morgan.
- Configure the application to output logs in a structured format for easy parsing.
- Set up monitoring tools like Prometheus for metrics and Grafana for visualization.
- Provide guidance on integrating these tools with my Kubernetes deployment."*

---

### **10. Continuous Integration and Deployment (Optional)**

**Description**: Automate the build, test, and deployment processes using CI/CD pipelines.

**Prompt**:

*"Help me set up a CI/CD pipeline for my application:

- Guidance on using tools like GitHub Actions, Jenkins, or GitLab CI for automating builds and tests.
- Steps to automate Docker image building and pushing to a container registry.
- Instructions on automating Helm chart deployments to a Kubernetes cluster.
- Best practices for ensuring a smooth and secure CI/CD process."*

