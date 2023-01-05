export const minLengthValidator = (e, bound, setState, values) => {
  setState((errors) => ({
    ...errors,
    [e.target.name]: values[e.target.name].length < bound,
  }));
};

export const emailValidator = (e, setState, values) => {
  setState((errors) => ({
    ...errors,
    [e.target.name]:
      !values[e.target.name].match(
        /^[a-zA-Z0-9]{0,40}@[a-zA-Z]{0,15}\.[a-zA-Z]{0,6}$/
      ) || values[e.target.name].length === 0,
  }));
};

export const imageUrlValidator = (e, setState, values) => {
  setState((errors) => ({
    ...errors,
    [e.target.name]:
      !values[e.target.name].match(/^(http|https):\/\/(...)+\.(jpg|png)$/) ||
      values[e.target.name].length === 0,
  }));
};

export const positiveNumberValidator = (e, setState, values) => {
  setState((errors) => ({
    ...errors,
    [e.target.name]: values[e.target.name] <= 0,
  }));
};
