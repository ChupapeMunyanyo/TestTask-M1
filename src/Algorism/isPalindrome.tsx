export const isPalindrome = () => {

    //№4
    // Проверка на палиндром
    // Напишите функцию, которая проверяет, является ли строка палиндромом (то есть читается одинаково слева направо и справа налево).

    function isPalindrome (str:string) {
        return str === str.toLowerCase().split('').reverse().join('')
    }
    
    console.log(isPalindrome('madam'))
    console.log(isPalindrome('JavaScript'))

    return (
      <div>isPalindrome</div>
    )
  }
