import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        
        this.state = {
            names: ['Natalie', 'Cory', 'Grayson', 'Tate', 'Avari', 'Macy', 'Bella'],
            userInput: '',
            filteredNames: []
        }
    }

    handleChange = (value) => {
        this.setState({
            userInput: value
        });
    }

    filterNames = (userInput) => {
        let arr = this.state.names;
        let filterNames = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i].includes(userInput)){
                filterNames.push(arr[i])
            }
        }
        this.setState({
            filteredNames: filterNames
        });
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;