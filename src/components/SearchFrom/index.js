import React from "react";
import {
    ContainerForm,
  ContainerInputAndLabel,
  InputFilter,
  LabelFilter,
} from "./styles";

function SearchForm({ inputChange }) {
  return (
    <>
      <ContainerForm>
        <ContainerInputAndLabel>
          <LabelFilter>
            <InputFilter
              type="checkbox"
              name="sort"
              value="order_by=asc"
              className="order_by"
              onChange={(e) => inputChange(e, "order_by")}
            ></InputFilter>
            Ascending
          </LabelFilter>
        </ContainerInputAndLabel>
        <ContainerInputAndLabel>
          <LabelFilter>
            <InputFilter
              type="checkbox"
              name="sort"
              value="order_by=desc"
              className="order_by"
              onChange={(e) => inputChange(e, "order_by")}
            ></InputFilter>
            Downward
          </LabelFilter>
        </ContainerInputAndLabel>
        <ContainerInputAndLabel>
          <LabelFilter>
            <InputFilter
              type="checkbox"
              name="by"
              value="sort_by=title"
              className="sort_by"
              onChange={(e) => inputChange(e, "sort_by")}
            ></InputFilter>
            By Title
          </LabelFilter>
        </ContainerInputAndLabel>
        <ContainerInputAndLabel>
          <LabelFilter>
            <InputFilter
              type="checkbox"
              name="by"
              value="sort_by=year"
              className="sort_by"
              onChange={(e) => inputChange(e, "sort_by")}
            ></InputFilter>
            By Year
          </LabelFilter>
        </ContainerInputAndLabel>
        <ContainerInputAndLabel>
          <LabelFilter>
            <InputFilter
              type="checkbox"
              name="by"
              value="sort_by=id"
              className="sort_by"
              onChange={(e) => inputChange(e, "sort_by")}
            ></InputFilter>
            By Id
          </LabelFilter>
        </ContainerInputAndLabel>
      </ContainerForm>
    </>
  );
}

export default SearchForm;
