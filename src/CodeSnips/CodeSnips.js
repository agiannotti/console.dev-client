let codeSnips = {
  snippets: [
    `const serializeResource = (resource) => ({
      id: resource.id,
      title: xss(resource.title),
      content: xss(resource.content),
      zipcode: resource.zipcode,
      date_published: resource.date_published,
      });`,
    `function countSheeps(arrayOfSheep) {
      let count =0;
      for(let i=0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i] === true){
      count ++
      }
      }return count;
      }`,
    `function removeSmallest(numbers) {
      let newArr = [...numbers];
      let index = newArr.indexOf(Math.min(...newArr))
      newArr.splice(index, 1)
      return newArr;
      }`,
    `function solution(number){
      let count = 0;
      let answer = 0;
      while (count < number) {
      if (count % 3 === 0 || count % 5 === 0) {
      answer += count;
      }
      count++;
      }
      return answer;
      }`,
    `function iqTest(numbers){
      let numArr = numbers.split(' ');
      let evens = numArr.filter(numbers => numbers%2 === 0)
      if (evens.length === 1) return numArr.indexOf(evens[0])+ 1
      else {
      let odd = numArr.find(num => num %2 === 1)
      return numArr.indexOf(odd) + 1
      }
      }`,
  ],
};

export default codeSnips;
