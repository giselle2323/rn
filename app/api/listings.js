import { Platform } from "react-native";

import client from "./client";

const endpoint = "/listings";

const getListings = (a, b, c) => client.get(endpoint);

const addListings = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  console.log(listing.images);

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image
      // url: 'https://moshbucket1.s3.us-east-2.amazonaws.com/couch3_full.jpg',
    });
  });

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListings,
};
