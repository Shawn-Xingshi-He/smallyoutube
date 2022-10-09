import { gapi } from "gapi-script";

export function loadClient() {
  gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        // console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}

export function execute(searchContent, setData) {
  return gapi.client.youtube.search
    .list({
      part: ["snippet"],
      maxResults: 25,
      q: searchContent,
    })
    .then(
      function (response) {
        setData(response.result.items);
        // console.log("Response", response.result.items);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
}
