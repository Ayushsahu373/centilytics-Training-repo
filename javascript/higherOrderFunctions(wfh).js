//foreach,sort,map,filter,reduce



 let serviceData=[
    {
        "practice_name": "Quality Assurance",
        "practice_status": "Internal & External",
        "price": 56,
        "service_description": "Our Application Testing Service offers comprehensive functional testing for web and mobile applications. We handle everything from requirement gathering and planning to ensure alignment with business needs, \nto creating detailed test cases, including positive, negative, false positive, and false negative scenarios. Our team executes these test cases to thoroughly validate application functionality, identify defects early, and ensure smooth performance.",
        "service_name": "Application Testing Service",
        "service_status": "Active",
        "service_type": "Professional Services",
        "id": "67d923e9d2dc988a6cfbf85b"
    },
    {
        "practice_name": "DevOps",
        "practice_status": "Internal & External",
        "price": 86,
        "service_description": "Under this Microservice, our Service Leads manage Pritunl VPN services, including deployment, user management (create/update/delete users), decommissioning outdated setups, configuration backup and restore, monitoring and logging, applying security updates, and integrating with Single Sign-On (SSO) for secure access.",
        "service_name": "Pritunl Service",
        "service_status": "Active",
        "service_type": "Professional Services",
        "id": "67d92162d2dc988a6cfbf32e"
    },
    {
        "practice_name": "Cloud Ops",
        "practice_status": "Internal & External",
        "price": 88,
        "service_description": "Our Backup Service offers a range of actions such as creating, managing, and restoring data backups. Our \nService Leads ensure the creation of backup policies that define the frequency, timing, and retention duration of backups. Additionally, this Service supports point-in-time snapshots, capturing your system’s state at a specific time. Our Backup Service also includes operations for restoring data to a new location or back to the original.",
        "service_name": "Backup",
        "service_status": "Active",
        "service_type": "Professional Services",
        "id": "67d923e9d2dc988a6cfbf843"
    },
    {
        "practice_name": "Cloud Ops",
        "practice_status": "Internal & External",
        "price": 88,
        "service_description": "Our Database Services are designed to optimize database performance, enhance security, and ensure seamless cloud management. We handle tasks like database creation, backup, restoration, scheduled jobs, and logging configuration to maintain robust operations. Additionally, we apply patches, manage updates, and offer version control to meet your application’s evolving requirements. Our Service Leads ensure your data is secure, compliant, and always available for smooth operational continuity.",
        "service_name": "Database Operations",
        "service_status": "Active",
        "service_type": "Professional Services",
        "id": "67d922dbd2dc988a6cfbf700"
    },
    {
        "practice_name": "Cloud Ops",
        "practice_status": "Internal & External",
        "price": 88,
        "service_description": "Our Functions Service focuses on enhancing the overall efficiency of your cloud through serverless compute operations as we provide end-to-end automation of manual and repetitive tasks in your cloud. Our Service Leads follow industry best practices to deliver outcomes that cover the entire lifecycle such as function provisioning, reconfiguration, and deprovisioning.",
        "service_name": "Functions",
        "service_status": "Active",
        "service_type": "Professional Services",
        "id": "67d923e9d2dc988a6cfbf8a5"
    },
    {
        "practice_name": "Cloud Ops",
        "practice_status": "Internal & External",
        "price": 88,
        "service_description": "Our Operating System Operations Service ensure your Windows and Linux systems are secure, up-to-date, \nand running efficiently. We handle patch installations, job scheduling, user management, package installations and removals, OS upgrades, and configuration management. Our Service Leads implement these measures according to industry best practices.",
        "service_name": "Operating System Operations",
        "service_status": "Active",
        "service_type": "Professional Services",
        "id": "67d92316d2dc988a6cfbf771"
    },
    {
        "practice_name": "DevOps",
        "practice_status": "Internal & External",
        "price": 112,
        "service_description": "At Zarthi, our Service Leads manage the deployment, scaling, and maintenance of Kubernetes clusters on AWS EKS. This includes node group upgrades, cluster version updates, networking configurations, and security best practices. Additionally, we ensure seamless integrations with AWS services, monitoring, and high availability for efficient workload orchestration.",
        "service_name": "AWS EKS services",
        "service_status": "Active",
        "service_type": "Professional Services",
        "id": "67d92162d2dc988a6cfbf30e"
    },
    {
        "practice_name": "Cloud Ops",
        "practice_status": "Internal & External",
        "price": 138,
        "service_description": "Our Block Storage Professional Service covers the entire range of storage operations such as upgrade, downgrade, delete, etc. to ensure you have an optimal cloud. Our Service Leads strictly follow industry best practices to ensure that the Service is delivered on time and your cloud remains safe, secure, and at its optimal performance. ",
        "service_name": "Block Storage",
        "service_status": "Active",
        "service_type": "Professional Services",
        "id": "67d923e9d2dc988a6cfbf89c"
    },
    {
        "practice_name": "Cloud Ops",
        "practice_status": "Internal & External",
        "price": 138,
        "service_description": "Our File Storage Service offers a range of storage options that are both accessible and scalable. We provision, configure, and manage File Storage to ensure efficient, secure, and scalable file sharing and storage in your cloud. This Service also includes creating and attaching File Storage to resources, modifying storage configurations, and managing the lifecycle of the storage resources. ",
        "service_name": "File Storage",
        "service_status": "Active",
        "service_type": "Professional Services",
        "id": "67d923e9d2dc988a6cfbf839"
    },
    {
        "practice_name": "Cloud Ops",
        "practice_status": "Internal & External",
        "price": 138,
        "service_description": "Our Network Access Control service secures your cloud environment by implementing and managing network access control mechanisms. This includes creating and configuring security groups and Network Access Control Lists (NACLs) for resources, tuning inbound and outbound network traffic rules based on criteria such as source, destination, port, and protocol, and deleting security groups and NACLs when necessary. Our Service Lead implements these measures according to industry standards, ensuring secured Network Access Control for your cloud resources.",
        "service_name": "Network Access Control",
        "service_status": "Active",
        "service_type": "Professional Services",
        "id": "67d92316d2dc988a6cfbf7f9"
    }
]

// forEach
console.log("Service Data");
serviceData.forEach(service => {
    console.log(service.service_name + " : " + service.price);
});

// sort
console.log("Sorted Data");
let sortedData = [...serviceData].sort((a, b) => a.price - b.price);
sortedData.forEach(service => {
    console.log(service.service_name + " : " + service.price);
});

// map
console.log("Service Names");
let serviceNames = serviceData.map(service => service.service_name);
serviceNames.forEach(name => console.log(name));

// filter
console.log("Services with price greater than 100");
let filteredData = serviceData.filter(service => service.price > 100);
filteredData.forEach(service => {
    console.log(service.service_name + " : " + service.price);
});
