//create initial components
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';

const API_KEY = 'AIzaSyDEHq932RUPKz6Dfx8KsnFub_OYOqXjB2I';





//our components
const App = () => {
    return <div>
        <SearchBar/>
    </div>;
}





//generate the components
ReactDOM.render(<App />, document.querySelector('.container'));