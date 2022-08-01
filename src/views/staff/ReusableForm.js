import React from "react";
const inpType = ({
  id,
  inptypes,
  selectOptionText = "",
  handleChange,
  values = "",
  disable,
  readonly,
}) => {
  switch (inptypes) {
    case "text":
      return (
        <input
          type="text"
          className={`entryform form-control form-control-sm`}
          name={id}
          onChange={handleChange}
          value={values}
          disabled={disable}
        />
      );
    case "number":
      return (
        <input
          type="number"
          className={`entryform form-control form-control-sm`}
          name={id}
          onChange={handleChange}
          value={values}
          disabled={disable}
        />
      );
    case "email":
      return (
        <input
          type="email"
          className={`entryform form-control form-control-sm`}
          name={id}
          onChange={handleChange}
          value={values}
          disabled={disable}
        />
      );

    case "selectwithid":
      return (
        <select
          className="entryform form-select form-select-sm"
          onChange={handleChange}
          name={id}
          value={values}
          disabled={disable}
        >
          {id === "zoneId" && <option selected={true}>Select any One</option>}
          {selectOptionText.length &&
            selectOptionText.map((element, index) => {
              const { id, name } = element;
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
        </select>
      );
    case "date":
      return (
        <input
          type="date"
          className={`form-control form-control-sm entryform`}
          onChange={handleChange}
          name={id}
          value={values}
          disabled={disable}
        />
      );
    default:
      return;
  }
};
export const InputBox = ({
  label,
  inptypes,
  id,
  values,
  classname,
  rowTypes,
  inpclassname,
  labelclassname,
  selectOptionText = "",
  handleChange,
  disable = "",
  readonly = "",
}) => {
  // console.log(selectOptionText, rowTypes);
  if (rowTypes == "double") {
    return (
      <div className="row mb-0 mb-sm-2">
        {label && (
          <label
            htmlFor={id}
            className={`${labelclassname} pt-sm-1 entryformlabel`}
          >
            {label}
          </label>
        )}
        <div className={`${inpclassname} `}>
          {inpType({
            id,
            inptypes,
            selectOptionText,
            handleChange,
            values,
            disable,
          })}
        </div>
      </div>
    );
  }

  if (rowTypes == "single") {
    return (
      <>
        {label && (
          <label
            htmlFor={id}
            className={`${labelclassname} pt-1  entryformlabel`}
          >
            {label}
          </label>
        )}
        <div className={`${inpclassname} mb-2`}>
          {inpType({
            id,
            inptypes,
            selectOptionText,
            handleChange,
            values,
            disable,
            readonly,
          })}
        </div>
      </>
    );
  }
};
