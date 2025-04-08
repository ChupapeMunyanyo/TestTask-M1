export const reverseString = () => {

    //№3
    // Переворот строки
    // Напишите функцию, которая принимает строку и возвращает её перевёрнутую версию.
    
    function reverseString (str:string) {
        return Array.from(str.toLowerCase()).reverse()
    }

    console.log(reverseString("hello")); // "olleh"
    console.log(reverseString("javascript")); // "tpircsavaj"
  return (
    <div>reverseString</div>
  )
}
