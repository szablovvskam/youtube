import React from "react";

class SearchBar extends React.Component {
    state = {term: ""}

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onTermSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Wpisz temat filmu</label>
                        <input 
                            type="text" 
                            placeholder="Temat" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar