import React,{Fragment} from "react"
import "./_video.css"

function getCss(imageurl) {
    const _styles = {
      backgroundImage: `url(${imageurl})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      height: "180px",
      position: "relative"
    };
    return _styles;
  }
  
const selectVideo = (VideoIdObj,onVideoSelected) => {
onVideoSelected(VideoIdObj.videoId)
}


const ConstructVideoTitles = (props) => {
    return props.data.map(({ snippet,id },index) => {
        return(
            <div className="video"
            key={index}
            onClick={()=>selectVideo(id,props.onVideoSelected)}>
            <div style={getCss(snippet.thumbnails.high.url)} key={index} />
            <p className="title">{snippet.title}</p>
            </div>
        )
    })
}


const Video = (props) =>{
    return <Fragment> <ConstructVideoTitles data={props.data} onVideoSelected={props.onVideoSelected} /> </Fragment>
    //return <Fragment>{constructVideoTitles(props.data,props.onVideoSelected)}</Fragment>
}


export default Video

