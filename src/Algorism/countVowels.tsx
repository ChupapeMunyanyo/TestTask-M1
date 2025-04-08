export const countVowels = () => {

    //№2
      // Подсчёт гласных в строке
      // Напишите функцию, которая принимает строку и возвращает количество гласных в этой строке.
      
      const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
    
      function countVowels(str:string) {
        return Array.from(str.toLowerCase()).filter( char => vowels.has(char)).length
      }
      
      console.log(countVowels("hello")); // 2
      console.log(countVowels("javascript")); // 3

      return (
        <div>countVowels</div>
      )
    }