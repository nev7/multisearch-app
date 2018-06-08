import React from 'react';
import {Throttle} from 'react-throttle';
import GetData from './GetData';
import Suggestions from './Suggestions';
import duckLogo from '../Images/DDG.png';
import bingLogo from '../Images/Bing.png';
import '../Styles/Multisearch.css';

//This component holds the search related 
class MultiSearch extends React.Component { 
    state = {
        formattedResults: [],
        searchValue: '',
    };

    handleSearchChange = e => {
        //On change of the search input if the value is not
        //an empty string invoke the Getdata methods
        const value = e.target.value;

        if (value === "") {
            this.setState({
                formattedResults: [],
            });
        } else {
            GetData.search(value, results => {
                this.formatResults(results);
            });
        }
    };

    formatResults = res => {
        //Here the data from the 2 search APIs is compined into 1 array and only
        //the needed data is extracted
        let duckResults = res.RelatedTopics ? res.RelatedTopics : [];
        //let bingResults = res.bing.relatedSearches ? res.bing.relatedSearches.value : [];
        //let combinedResults = duckResults.concat(bingResults);

        let formatOutbut = duckResults.map((v, i) => {
            if (v.FirstURL) {
                return <li key={i}><img alt='Duck Logo' src={duckLogo}/><a href={v.FirstURL}>{v.Text}</a></li>
            } //else if (v.displayText) {
               // return <li key={i}><img alt='Bing Logo' src={bingLogo}/><a href={v.webSearchUrl}>{v.displayText}</a></li>
            //}
        });

        this.setState({
            formattedResults: formatOutbut
        });
    };

    render() {
        return (
            <div className="wrapper">
                <Throttle time="1000" handler="onChange">
                    <input
                        className="searchBox"
                        type="text"
                        placeholder="Type to search..."
                        value={this.props.value}
                        onChange={this.handleSearchChange}
                    />
                </Throttle>
                <Suggestions results = {this.state.formattedResults}/>
            </div>
        );
    }
}

export default MultiSearch;