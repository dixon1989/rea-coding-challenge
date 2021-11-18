import axios from "axios";

// Using Axios as mock retrieving json data
export const getDataResults = async () => {
  try {
    /* Only use local data for further presentation */
    const req = await axios.get(`./properties.json`);
    if (req.status === 200) {
      let data = req.data;
      return data;
    }
  } catch (error) {
    console.log("Couldnt Retrieve Data: ", error);
  }
};
