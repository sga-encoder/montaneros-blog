import axios from 'axios';

export const getActivities = async (accessToken) => {
  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener actividades:', error);
    return null;
  }
};
