const capitalizeFirstLetter = (word) => {
  const wordFirstLetterUpperCase = word.charAt(0).toUpperCase() + word.slice(1)
  return wordFirstLetterUpperCase
};

export default capitalizeFirstLetter;