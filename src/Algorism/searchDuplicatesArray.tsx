export const searchDuplicatesArray = () => {

    //№1
      // Поиск дубликатов в массиве
      // Напишите функцию, которая принимает массив чисел и возвращает true, если в массиве есть дубликаты, и false в противном случае.
    
      function hasDublicates( arr:number[] ) {
        return new Set(arr).size !== arr.length
      }
      console.log(hasDublicates([1, 2, 3, 4, 4]))
      return (
        <div>searchDuplicatesArray</div>
      )
    }