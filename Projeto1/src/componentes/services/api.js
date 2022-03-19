import axios from "axios";



const api = axios.create({

  baseURL: "https://fast-badlands-00990.herokuapp.com",
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJJR09SIiwiaWF0IjoxNjQ3MzgwNTMzLCJleHAiOjE2NDgyNDQ1MzN9.lyFu2ldAt6VQELr7RO9hpoIQRKRoLHHIIKFQkNTDjBs"

  }
  
});

export default api;

