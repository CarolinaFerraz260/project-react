//import React, { useEffect, useState } from "react";
// import {} from "./styles";

function SearchForm({ inputChange }) {

    return <>
        <form>
            <label>
                <input type="checkbox" name="sort" value="order_by=asc" className="order_by" onChange={(e) => inputChange(e, "order_by")}></input>asc
            </label>
            <label>
                <input type="checkbox" name="sort" value="order_by=desc" className="order_by" onChange={(e) => inputChange(e, "order_by")}></input>des
            </label>
            <label>
                <input type="checkbox" name="by" value="sort_by=title" className="sort_by" onChange={(e) => inputChange(e, "sort_by")}></input>title
            </label>
            <label>
                <input type="checkbox" name="by" value="sort_by=year" className="sort_by" onChange={(e) => inputChange(e, "sort_by")}></input>year
            </label>
            <label>
                <input type="checkbox" name="by" value="sort_by=id" className="sort_by" onChange={(e) => inputChange(e, "sort_by")}></input>id
            </label>
        </form>
    </>;
}

export default SearchForm;