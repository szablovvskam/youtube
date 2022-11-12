import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";    
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {videos: [], selectedVideo: null}

    componentDidMount() {
        this.onTermSubmit("react")
    }
    
    onTermSubmit = (term) => {
        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                q: term,
                key: "AIzaSyBL_MjrXTetYbLqONYtKhRfXz3kkBvlHR4"
            }
        }).then(result => {
            this.setState({
                videos: result.data.items,
                selectedVideo: result.data.items[0]
            })
        })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar 
                    onTermSubmit={this.onTermSubmit}
                />

                <div className="ui grid">

                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>

                    <div className="five wide column">
                        <VideoList videos = {this.state.videos} onVideoSelect = {this.onVideoSelect}/>
                    </div>

                </div>  
            </div>
        )
    }
}

export default App