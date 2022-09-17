import React from "react";
import { FilterLabel, FilterInput } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { setFilter } from "Redux/filterSlice";

const Filter = ({ value }) => {
   const dispatch = useDispatch();

     const onSetFilter = ({target}) => {
    dispatch(setFilter(target.value))
  }
    return (
        <div>
        <h2>Contacts</h2>
    <FilterLabel>
        Find contacts by name <FilterInput type='text' name="filter" id="filter" value={value} onChange={onSetFilter}></FilterInput>
            </FilterLabel>
            </div>)
};

export default Filter;
