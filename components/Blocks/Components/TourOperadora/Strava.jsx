'use client'
import { useEffect, useState } from 'react';
import { getActivities } from '@/api/strava';
import axios from 'axios';

const Strava = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // let accessToken;
      // if (process.env.STRAVA_ACCESS_TOKEN === undefined) {
      //   accessToken = process.env.STRAVA_ACCESS_TOKEN; // Reemplaza esto con tu token de acceso
      // } else {
      //   accessToken = process.env.NEXT_PUBLIC_STRAVA_ACCESS_TOKEN;
      // }

      // console.log('hola',accessToken);
      // const data = await getActivities(accessToken);
      // const clientId = '106104';
      // const clientSecret = 'fdd9f95c53bdd2fb8be49ee27c00d56004b020aa';
      // const code = '1475e2f65577117f4583fabe10bf0e664897ee63';
      // const grantType = '9ada3abf89aff92fb641bd36ff19ab963143cb94';

      // axios.post('https://www.strava.com/api/v3/oauth/token', {
      //   client_id: clientId,
      //   client_secret: clientSecret,
      //   code: code,
      //   grant_type: grantType
      // })
      // .then(response => {
      //   console.log(response.data);
      // })
      // .catch(error => {
      //   console.error(error);
      // });

      const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      }
      const body = JSON.stringify({
        client_id: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID || process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET || process.env.STRAVA_CLIENT_SECRET,
        refresh_token: process.env.NEXT_PUBLIC_STRAVA_REFRESH_TOKEN || process.env.STRAVA_REFRESH_TOKEN,
        grant_type: refresh_token,
      })

      const reautorizeResponce = await fetch('https://www.strava.com/oauth/token',{
        method: 'POST',
        'headers': headers,
        'body': body
      })
      const reautorizeToken = await reautorizeResponce.json();

      const data = await fetch('https://www.strava.com/api/v3/athlete/8696836/stats?access_token'+reautorizeToken.access_token);

      const dataJson = await data.json();
      setActivities(dataJson);
    };
    
    fetchData();
  }, []);

  console.log('holaii',activities);

  return (
    <div>
      <h1>Mis actividades</h1>
      {/* <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Strava;