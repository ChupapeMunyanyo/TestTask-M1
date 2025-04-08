export const firstMissingPositive = () => {
    //№5
    // Первая недостающая положительная цифра
    // Напишите функцию, которая находит первую отсутствующую положительную цифру в массиве чисел.

function firstMissingPositive1(nums:number[]):number {
    //Первый вариант
      const n = nums.length;
      // 1. Помечаем ненужные элементы (<= 0 или > n)
      for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
      }
      // 2. Используем индексы для отметки присутствующих чисел
      for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]); 
        }
      }
      // 3. Ищем первый индекс с положительным числом
      for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1; 
        }
      }
      // 4. Если все числа от 1 до n есть, возвращаем n + 1
      return n + 1;
    }
  
    //Второй вариант
    function firstMissingPositive2(nums: number[]): number {
      // Оставляем только положительные числа и сортируем
      const positives = nums.filter(x => x > 0).sort((a, b) => a - b);
      
      let missing = 1; // Начинаем проверку с 1
      
      for (const num of positives) {
          if (num === missing) {
              missing++; // Если число есть, увеличиваем ожидаемое
          } else if (num > missing) {
              return missing; // Если встретили число больше missing, значит, оно пропущено
          }
      }
      
      return missing; // Если все числа на месте, возвращаем следующее
  }
  
  console.log(firstMissingPositive1([1, 2, 0])); // 3
  console.log(firstMissingPositive1([3, 4, -1, 1])); // 2
  console.log(firstMissingPositive2([1, 2, 0])); // 3
  console.log(firstMissingPositive2([3, 4, -1, 1])); // 2
  return (
    <div>firstMissingPositive</div>
  )
}
