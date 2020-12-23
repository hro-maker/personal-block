import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
 
class Example extends React.Component {
  render() {
    const {url}=this.props;
    const opts = {
    
      playerVars: {
        autoplay: 1,
      },
    };
 
    return <YouTube videoId={url} opts={opts} onReady={this._onReady} />;
  }
 
  _onReady(event) {
    
    event.target.pauseVideo();
  }
}
const mapstateToprops=(state)=>{
  return{
    url:state.YoutubeReducer.url
  }
}
export default connect(mapstateToprops)( Example);