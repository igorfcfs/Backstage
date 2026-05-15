import React, { useEffect, useState } from 'react';
import {
  Page,
  Header,
  Content,
} from '@backstage/core-components';

import {
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

type City = {
  city: string;
  country: string;
  timezone: string;
};

const cities: City[] = [
  {
    city: 'São Paulo',
    country: 'Brasil',
    timezone: 'America/Sao_Paulo',
  },
  {
    city: 'Nova York',
    country: 'Estados Unidos',
    timezone: 'America/New_York',
  },
  {
    city: 'Tóquio',
    country: 'Japão',
    timezone: 'Asia/Tokyo',
  },
];

export const WorldClockPage = () => {
  const [, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTime = (timezone: string) => {
    return new Intl.DateTimeFormat('pt-BR', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date());
  };

  const getDate = (timezone: string) => {
    return new Intl.DateTimeFormat('pt-BR', {
      timeZone: timezone,
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date());
  };

  return (
    <Page themeId="tool">
      <Header
        title="World Clock"
        subtitle="Horários em tempo real ao redor do mundo"
      />

      <Content>
        <Grid container spacing={3}>
          {cities.map(city => (
            <Grid item xs={12} md={4} key={city.timezone}>
              <Card>
                <CardContent>
                  <Typography variant="h5">
                    {city.city}
                  </Typography>

                  <Typography color="text.secondary">
                    {city.country}
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    {getTime(city.timezone)}
                  </Typography>

                  <Typography variant="body1">
                    {getDate(city.timezone)}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mt: 2 }}
                  >
                    {city.timezone}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Content>
    </Page>
  );
};