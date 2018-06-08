import React from 'react';
import '../Styles/Suggestions.css';

//Simple component that holds the formatted results from the search
class Suggestions extends React.Component {
    render() {
        return (
            <div className="suggestions-box">{this.props.results}</div>
        )
    }
}

export default Suggestions;