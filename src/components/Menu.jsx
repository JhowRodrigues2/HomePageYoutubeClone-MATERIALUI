import React, { useContext } from "react";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Button,
  ListSubheader,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { GlobalContext } from "../context";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  listItem: {
  },
}));
const Menu = () => {
  const classes = useStyles();
  const { open } = useContext(GlobalContext);
  return (
    <Drawer
      PaperProps={{ style: { border: "none", width: 240 } }}
      style={{ borderRight: "none" }}
      className={classes.drawer}
      variant="permanent"
      sx={{ mr: 2, border: "none", ...(!open && { display: "none" }) }}
      open={open}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {["Início", "Inscrições"].map((text, index) => (
            <ListItem key={text} disablePadding className={classes.listItem}>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <SubscriptionsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Biblioteca", "Histórico"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HistoryIcon />}
                  {index === 1 && <VideoLibraryIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box p={7}>
          <Typography variant="body2">
            Faça login para curtir vídeos, comentar e se inscrever.
          </Typography>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircle />}
            >
              Fazer login
            </Button>
          </Box>
        </Box>
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.subheader}
            >
              Explorar
            </ListSubheader>
          }
        >
          {[
            "Em Alta",
            "Shopping",
            "Música",
            "Filmes",
            "Ao vivo",
            "Jogos",
            "Notícias",
            "Esportes",
            "Aprender",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <WhatshotIcon />}
                  {index === 1 && <LocalMallOutlinedIcon />}
                  {index === 2 && <MusicNoteOutlinedIcon />}
                  {index === 3 && <MovieOutlinedIcon />}
                  {index === 4 && <CellTowerOutlinedIcon />}
                  {index === 5 && <SportsEsportsOutlinedIcon />}
                  {index === 6 && <FeedOutlinedIcon />}
                  {index === 7 && <EmojiEventsOutlinedIcon />}
                  {index === 8 && <LightbulbOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Menu;
