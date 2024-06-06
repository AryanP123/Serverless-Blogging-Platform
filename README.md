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
