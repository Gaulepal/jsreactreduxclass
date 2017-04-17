//initial default components
import React, { Component } from 'react';

//our components
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                     />
            </div>
        );
    }
}




//rendering or exporting components
export default SearchBar;