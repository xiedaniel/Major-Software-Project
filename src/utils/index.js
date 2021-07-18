//create a list of definitions
const getDefList = (list) => {
  return list.map((item)=>{
    return item.def
  });
};

// randomise list to determine random order for terms to be tested
const shuffle = (list) => {
  for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = list[i];
      list[i] = list[j];
      list[j] = temp;
  }
};

const getQuestions = (list) => {
  return list.map((item)=> {
    const defList = getDefList(list);
    const filteredDefintion = defList.filter(def => def !== item.def)
    let choices = [item.def];
    // shuffle list of definitons without correct definition and take the first three defintions
    shuffle(filteredDefintion);
    choices = choices.concat(filteredDefintion.slice(0, 3))
    shuffle(choices)
    // console.log(choices)
    return {
        ...item,
        choices
    }
  });
}

export { getQuestions };