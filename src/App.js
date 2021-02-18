import React,{useState} from "react"
import Api from "./Api"
import Search from "./Search"
import VideoList from "./VideoList"
import VideoPlayer from "./VideoPlayer"

const App = ()=>{
    const [details,setDetails]=useState({
      videoMetaInfo:[],
      selectedVideoId:null
    })

    const onSearch = async keyword =>{
      const response = await Api.get("/search",{
        params:{
          q:keyword
        }
      })

      setDetails({
        videoMetaInfo:response.data.items,
        selectedVideoId:response.data.items[0].id.videoId
      })

    }

    const onVideoSelected = videoId =>{
      setDetails({
        ...details,
        selectedVideoId:videoId
      })
    }


    return(
      <div>
        <h1 style={{marginLeft:30}}>Youtube</h1>
        <Search onSearch={onSearch} />
        {console.log(details)}
        <VideoList onVideoSelected={onVideoSelected} data={details.videoMetaInfo} />
        {console.log(details.selectedVideoId)}
        <VideoPlayer videoId={details.selectedVideoId} />
      </div>
    )

}

export default App;
