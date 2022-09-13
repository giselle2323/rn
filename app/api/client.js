import { create } from "apisauce";

import authStorage from '../auth/storage';
import settings from "../config/settings";
import cache from "../utilty/cache";

const apiClient = create({
  // baseURL:  "https://giveaway-app.onrender.com/api",
  baseURL:  "http://192.168.0.159:9000/api",
  //https://moshbucket1.s3.us-east-2.amazonaws.com/couch3_full.jpg
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();

    if(!authToken) return;
    request.headers["x-auth-token"] = authToken;
})

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  console.log(settings.apiUrl);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
