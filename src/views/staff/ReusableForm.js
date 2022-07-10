import React from "react";
const inpType = ({
  id,
  inptypes,
  selectOptionText = "",
  handleChange,
  values = "",
  disable,
}) => {
  switch (inptypes) {
    case "text":
      return (
        <input
          type="text"
          className={`form-control form-control-sm`}
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
          className={`form-control form-control-sm`}
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
          className={`form-control form-control-sm`}
          name={id}
          onChange={handleChange}
          value={values}
          disabled={disable}
        />
      );

    case "select":
      return (
        <select
          className="form-select form-select-sm"
          onChange={handleChange}
          name={id}
          disabled={disable}
        >
          {selectOptionText &&
            selectOptionText.map((element, index) => {
              return (
                <option key={element} value={element}>
                  {element}
                </option>
              );
            })}
        </select>
      );
    case "selectwithid":
      return (
        <select
          className="form-select form-select-sm"
          onChange={handleChange}
          name={id}
          disabled={disable}
        >
          {selectOptionText &&
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
          className={`form-control form-control-sm`}
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
}) => {
  // console.log(selectOptionText, rowTypes);
  if (rowTypes == "double") {
    return (
      <div className="row mb-0 mb-sm-2">
        {label && (
          <label htmlFor={id} className={`${labelclassname} pt-sm-1`}>
            {label}
          </label>
        )}
        <div className={`${inpclassname}`}>
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
          <label htmlFor={id} className={`${labelclassname} pt-1`}>
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
          })}
        </div>
      </>
    );
  }
};
