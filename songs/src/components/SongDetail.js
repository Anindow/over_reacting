import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  console.log(song);
  return (
    <div><br />
      Song Detail <hr />
      <p>Title : {song?.title}</p> 
      <p>Duration : {song?.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
