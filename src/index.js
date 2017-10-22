import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBBHOnSuwThtNLKusEqD_5RJYWAsm7PdO8';

// create a new component, this component should produce some html

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={this.state.videos} />
      </div>
    );
  }
};

// take this component's generated html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));
