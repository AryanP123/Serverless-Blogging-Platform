# Serverless Blogging Platform
http://aryan-blog-bucket.s3-website.us-east-2.amazonaws.com/

This project is a serverless blogging platform built using AWS and React. The platform allows users to post blogs and view them.

## Features

- **React App**: The frontend of the blogging platform is a React application, which is hosted as a static website on an S3 bucket. You can access the website here.

- **AWS DynamoDB**: The blogs posted by users are stored in an AWS DynamoDB table named 'BlogPosts'.

- **AWS Lambda Function**: The platform uses an AWS Lambda function to interact with the DynamoDB table. The function supports two operations:
  - `GET`: Fetches all blog posts from the 'BlogPosts' table.
  - `POST`: Adds a new blog post to the 'BlogPosts' table.

- **API Gateway**: The platform uses AWS API Gateway to create a REST API endpoint. This endpoint sends GET and POST requests to the Lambda function to fetch and add data to the DynamoDB table.

<img width="1439" alt="image" src="https://github.com/AryanP123/Serverless-Blogging-Platform/assets/36793614/c54780ab-a7ca-4c2b-989b-86bdcbab31b0">
<img width="1440" alt="image" src="https://github.com/AryanP123/Serverless-Blogging-Platform/assets/36793614/0c7c80b1-96a1-4989-be74-cdbc0adb36b7">
<img width="1437" alt="image" src="https://github.com/AryanP123/Serverless-Blogging-Platform/assets/36793614/da240cd5-05d0-41f9-ba42-7bf847cac2e0">
