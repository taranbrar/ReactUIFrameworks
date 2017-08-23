import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    //width: 500,
    height: 350,
  //  overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'scripts/images/1.jpg',
    title: 'Image 1'
  },
  {
    img: 'scripts/images/2.jpg',
    title: 'Image 2'
  },
  {
    img: 'scripts/images/3.jpeg',
    title: 'Image 3'
  },
  {
    img: 'scripts/images/4.jpg',
    title: 'Image 4'
  },
  {
    img: 'scripts/images/5.jfif',
    title: 'Image 5'
  },
  {
    img: 'scripts/images/6.jpg',
    title: 'Image 6'
  },
];

const MuiGridList = () => (
  <MuiThemeProvider>
  <div style={styles.root}>
    <GridList
      cellHeight={120}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          //actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
  </MuiThemeProvider>
);

export default MuiGridList;