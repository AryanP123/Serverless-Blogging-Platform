import AWS from 'aws-sdk';
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const getBlogPost = async () => {
    const params = {
      TableName: 'BlogPosts',
    };
  
    const data = await dynamoDB.scan(params).promise();
    return data.Items;
};

const addBlogPost = async (post) => {
  const params = {
    TableName: 'BlogPosts',
    Item: post,
  };

  await dynamoDB.put(params).promise();
  return post;
};

export const handler = async (event) => {
    let response;
    switch (event.httpMethod) {
      case 'GET':
        const posts = await getBlogPost();
        response = {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Allow from anywhere 
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS" // Allow these HTTP methods
          },
          body: JSON.stringify(posts)
        };
        break;
      case 'POST':
        const newPost = await addBlogPost(JSON.parse(event.body));
        response = {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Allow from anywhere 
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS" // Allow these HTTP methods
          },
          body: JSON.stringify(newPost)
        };
        break;
      default:
        response = {
          statusCode: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Allow from anywhere 
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS" // Allow these HTTP methods
          },
          body: JSON.stringify({ message: 'Invalid method' })
        };
    }
    return response;
};
