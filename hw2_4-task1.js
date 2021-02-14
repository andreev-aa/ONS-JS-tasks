const myGreatTODOArray = [
	{
    task: 'Помыть кота!',
    author: 'Petya',
    done: true
  },
	{
    task: 'Купить кота!',
    author: 'Petya',
    done: true
  },
	{
    task: 'Сделать ДЗ!',
    author: 'Ivan',
    done: false
  }
];

function getAllTasksString( TODOArray ) {
  // функция возвращает задачи из списка в виде одной строки
  // потенциальная практика использования reduce
  const taskString = TODOArray
  .map(todo => todo.task)
  .reduce( (acc, taskName) => acc += (' ' + taskName) );

  //проверка
  console.log(taskString === 'Помыть кота! Купить кота! Сделать ДЗ!');
  return console.log(taskString);
}

getAllTasksString(myGreatTODOArray);
// возвращает 'Помыть кота! Купить кота! Сделать ДЗ!'





function getTasksByAuthor( TODOArray, author) {
  // функция возвращает все задачи из списка принадлежащие указанному автору
  // потенциальная практика использования filter
  const taskAutorString = TODOArray.filter( item => item.author === author );

  return console.log(taskAutorString);
}

getTasksByAuthor(myGreatTODOArray, 'Ivan');
// возвращает [{ task: 'Сделать ДЗ!', author: 'Ivan' }]





function findTasksByWord( TODOArray, searchString ) {
  // крайне примитивная функция поиска всех задач,
  // в тексте которых есть запрошенное слово
  // потенциальная практика с ... ? :)

  const foundString = TODOArray.filter(item => item.task.match(searchString) );

  return console.log(foundString);
}

findTasksByWord(myGreatTODOArray, 'шлем');
// возвращает
// [
//   { task: 'Помыть кота!', author: 'Petya' },
//   { task: 'Купить кота!', author: 'Petya' }
// ]


function findCompleteTasks( TODOArray ) {
  //своя - вывести строкой только выполненные задачи

  const taskDone = TODOArray.filter( status => status.done );
  const taskDoneString = taskDone.map(todo => todo.task).reduce( (acc, taskName) => acc += ('; ' + taskName) );

  return console.log(taskDoneString);
}

findCompleteTasks(myGreatTODOArray);
// возвращает Помыть кота!; Купить кота!