import axios from "axios";
import env from "react-dotenv";

// Use to request images from the endpoint by amount
export async function RequestImagesByAmount(amount) {
  // Request the initial feed data, specifying amount and access key
  var feedData = await axios.get(
    `https://api.unsplash.com/photos/?per_page=${amount}&client_id=${env.UNSPLASH_ACCESS_KEY}`
  );

  // Cast a copy of the response array
  var tempFeed = [...feedData.data];
  // For each image in the response, findout the height/width of the image and add to the temp array
  tempFeed.forEach((image, index) => {
    var img = new Image();
    img.src = image.urls.small;
    img.onload = function () {
      tempFeed[index]["size"] = {
        height: this.naturalHeight,
        width: this.naturalWidth,
      };
    };
  });

  // return the filtered array including size property
  return tempFeed;
}
