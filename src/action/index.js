import { GET_DATA, GET_IMG } from "./action-type";

export const getData = () => dispatch => {
  fetch("https://api.nasa.gov/planetary/apod?api_key=bdA6sLD68jGS1aQhEjMa6F8INemK8eDSyTFV9nfD")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_DATA,
        payload: data
      })
    );
};


export const getImageData = (imgData) => dispatch => {
  console.log(imgData.rover)
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${imgData.rover}/photos?earth_date=${imgData.date}&api_key=bdA6sLD68jGS1aQhEjMa6F8INemK8eDSyTFV9nfD`)
    .then(res => res.json())
    .then(imageData => 
      dispatch({
        type: GET_IMG,
        payload: imageData.photos
      })
    );
};