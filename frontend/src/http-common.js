import axios from "axios";

export default axios.create({
  // baseURL: "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-evuay/service/restaurants/incoming_webhook/",
  // baseURL: "http://localhost:8000/api/v1/restaurants",
  baseURL: "https://ap-southeast-1.aws.data.mongodb-api.com/app/restaurant-review-zaowd/endpoint/",
  // baseURL: "https://ap-southeast-1.aws.data.mongodb-api.com/app/restaurant-review-zaowd/endpoint/restaurants",

  headers: {
    "Content-type": "application/json"
  }
});