import axios from 'axios';
const apiKey = 'cddd2fbf219d413782fef5a35b67d78b';

export const getFacilities = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=startup&apiKey=${apiKey}`,
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};
