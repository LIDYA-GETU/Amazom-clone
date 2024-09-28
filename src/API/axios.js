import axios from "axios"
const axiosInstance= axios.create({
      // local instanceof firebase functions
      // baseURL:"http://127.0.0.1:5001/clone-b7179/us-central1/api",
      // deployed version of amazon server on render.com
      baseURL:"https://amazon-api-deploy-jlpd.onrender.com/"
});
export{axiosInstance};