import React from 'react';
import youtupe from '../api/youtupe';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
    state = {
        video : [],
        videoSelect : null
    };
    componentDidMount(){
        this.formSearchSubmit('virat');
    }
    formSearchSubmit = async searchVideo => {
        const response = await youtupe.get('/search',{            
                params : {
                    q : searchVideo
                }
            }
        )
        this.setState({
            video : response.data.items,
            videoSelect : response.data.items[0]
        })
    }
    onVideoSelect = video => {
        this.setState({
            videoSelect : video
        })
    }
    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.formSearchSubmit}/>     
                <div className="ui grid">     
                    <div className="ui row">  
                        <div className="eleven wide column">                            
                            <VideoDetail videoSelect={this.state.videoSelect}/>
                        </div>
                        <div className="five wide column">                  
                            <VideoList onVideoSelect={this.onVideoSelect} videoList={this.state.video}/>
                        </div> 
                    </div>                             
                </div>           
            </div>
        )
    }
}

export default App;