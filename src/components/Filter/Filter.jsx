import React from "react";
import { FilterLabel, FilterInput } from "./Filter.styled";

const Filter = ({ value, onChangeFilter }) => {
    return (
    <FilterLabel>
        Find contacts by name <FilterInput type='text' name="filter" id="filter" value={value} onChange={onChangeFilter}></FilterInput>
    </FilterLabel>)
};

export default Filter;
