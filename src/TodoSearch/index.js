import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

/*  class componente extends React.Component {
    constructor() {
        this.state = {
            patito: 'juan'
        };
    }
    render() {
        return (
            <div onClick={() => this.setState('Enrique')}>{this.state.patito}</div>
        )
    }
}*/


function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return [
        <input
            className="TodoSearch"
            placeholder="Buscador"
            onChange={onSearchValueChange}
            value={searchValue}
        />,

    ];
}
export { TodoSearch };

