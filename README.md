<h1>CI/CD Pipeline to Deploy Application to Kubernetes Cluster Using Jenkins and GitHub</h1>

<h2>Overview</h2>
<p>This project demonstrates the deployment of a basic application using a CI/CD pipeline with Jenkins and GitHub. The primary objective is to automate the build, test, and deployment process, ensuring a streamlined workflow from code push to deployment on a Kubernetes cluster.</p>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Jenkins</strong>: For automating the build, test, and deployment processes.</li>
    <li><strong>Docker</strong>: For containerizing the application.</li>
    <li><strong>Kubernetes</strong>: For orchestrating the deployment of containers.</li>
    <li><strong>Git</strong>: For version control.</li>
    <li><strong>GitHub</strong>: As the source code repository and for triggering Jenkins builds via webhooks.</li>
</ul>

<h2>Features</h2>
<ol>
    <li><strong>Automated CI/CD Pipeline</strong>:
        <ul>
            <li>Configured Jenkins to automate the build, test, and deployment process.</li>
            <li>Set up a GitHub webhook to trigger Jenkins builds on code push.</li>
        </ul>
    </li>
    <li><strong>Continuous Integration</strong>:
        <ul>
            <li>Automatically build and test the application on each code push.</li>
        </ul>
    </li>
    <li><strong>Continuous Deployment</strong>:
        <ul>
            <li>Deploy the application to a Kubernetes cluster upon successful build and test.</li>
        </ul>
    </li>
</ol>
