const regexUrl =
  /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/;

const regexTitle = /^[A-Z_ ]+$/i;

const validate = (form) => {
  const tempErrors = {};

  if (!regexTitle.test(form.title))
    tempErrors.title = "Special characters and numbers are not allowed";

  if (
    form.healthScore < 0 ||
    100 < form.healthScore ||
    form.healthScore.length < 1
  )
    tempErrors.healthScore = "Score must be between 0 and 100";

  if (!regexUrl.test(form.image)) tempErrors.image = "Must be a URL";

  if (!Object.keys(form.diets).length)
    tempErrors.diets = "Please choose at least one diet";

  if (form.summary.length < 1) tempErrors.summary = "Please detail the summary";

  const steps = form.steps.filter((element) => element.trim() !== "");
  if (steps.length < 2)
    tempErrors.steps = "Please detail at least two lines of steps";

  return tempErrors;
};

export default validate;
