import React from 'react'
import { Box,Toolbar,Typography,Grid } from '@mui/material'
import Thumb1 from '../assets/thumb1.png'
import Thumb2 from '../assets/thumb2.png'
import Thumb3 from '../assets/thumb3.png'
import Thumb4 from '../assets/thumb4.png'
import Thumb5 from '../assets/thumb5.png'
import Thumb6 from '../assets/thumb6.png'
import Thumb7 from '../assets/thumb7.png'
import Thumb8 from '../assets/thumb8.png'
const Content = () => {
    const videos = [
        {
          id: 1,
          title:
            'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
          channel: 'Jhow Rodrigues',
          views: '11 mi de visualizações',
          date: 'há 1 semana',
          thumb: `${Thumb1}`,
        },
        {
          id: 2,
          title:
            'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
          channel: 'Jhow Rodrigues',
          views: '957 mil visualizações',
          date: 'há 24 horas',
          thumb: `${Thumb2}`,
        },
        {
          id: 3,
          title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
          channel: 'Jhow Rodrigues',
          views: '106 mil visualizações',
          date: 'há 1 semana',
          thumb: `${Thumb3}`,
        },
        {
          id: 4,
          title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
          channel: 'Jhow Rodrigues',
          views: '5,6 mi de visualizações',
          date: 'há 1 ano',
          thumb: `${Thumb4}`,
        },
        {
          id: 5,
          title:
            'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
          channel: 'Jhow Rodrigues',
          views: '2,2 mi de visualizações',
          date: 'há 1 semana',
          avatar: '/images/avatar.jpeg',
          thumb: `${Thumb5}`,
        },
        {
          id: 6,
          title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
          channel: 'Jhow Rodrigues',
          views: '233 mil visualizações',
          date: 'há 1 mês',
          thumb: `${Thumb6}`,
        },
        {
          id: 7,
          title:
            'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
          channel: 'Jhow Rodrigues',
          views: '118 mil visualizações',
          date: 'há 3 dias',
          thumb: `${Thumb7}`,
        },
        {
          id: 8,
          title:
            'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
          channel: 'Jhow Rodrigues',
          views: '1,9 mi de visualizações',
          date: 'há 2 semanas',
          thumb: `${Thumb8}`,
        },
      ];
  return (
    <Box p={8}>
      <Toolbar />
      <Typography variant="h5" color="textPrimary" style={{ fontWeight: 500, marginBottom:12 }}> Em alta </Typography>
      
      <Grid container spacing={4}>
        {videos.map((item, index) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
            <Box >
              <img
                style={{ width: "100%" }}
                alt={item.title}
                src={item.thumb}
              />
            </Box>

            <Typography 
              style={{ fontWeight: 600, display:'flex' }}
              gutterBottom
              variant="body1"
              color="textPrimary"
            >
            <img src={'https://avatars.githubusercontent.com/u/107954865?v=4'} alt="" style={{width:30, height:30, borderRadius:'50%',marginTop:3, marginRight:10, cursor:'pointer'}}/>

              {item.title}
            </Typography>
            
            <Typography display="block" variant="body1"  color="textSecondary"  >
              {item.channel}
            </Typography>
            <Typography variant="bady2" color="textSecondary">
              {`${item.views} • ${item.date}`}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Content
