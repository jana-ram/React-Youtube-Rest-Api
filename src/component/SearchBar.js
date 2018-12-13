import React from 'react';

class SearchBar extends React.Component {

    state = {
        seachVideo : ''
    };

    inputChange = (event) => {
        this.setState({
            seachVideo : event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.seachVideo);
    }
    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">                        
                        <label>Video Search</label>
                        <input type="text"
                            onChange={
                                this.inputChange
                            }
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;