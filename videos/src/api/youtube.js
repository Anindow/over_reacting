import axios from "axios";

const KEY = "AIzaSyBoQ_JkYMfZZr6XanmnnujlK8mr78SR-x0";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 6,
    key: KEY,
  },
});
