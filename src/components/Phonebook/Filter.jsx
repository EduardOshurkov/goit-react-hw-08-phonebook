import React from "react";

const Filter = ({ value, onChange }) => {
    return (
    <label>
        Filter Contact <input type='text' name="filter" id="filter" value={value} onChange={onChange}></input>
    </label>)
};

export default Filter;