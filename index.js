// Завдання 1
/**
 * Функція `checkData` перевіряє наявність даних.
 * У випадку помилки, викликається помилка з причиною (cause).
 *
 *  data - вхідні дані.
 */
function checkData(data) {
  try {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      throw new Error("Об'єкт пустий");
    } else {
      return data;
    }
  } catch (error) {
    // Обробка помилки
    console.error("Помилка:", error.message);
  }
}

console.log("Завдання: 1 ==============================");

console.log(checkData({}));
// Виведе Об'єкт пустий
console.log(checkData({ name: "John", age: 30, city: "New York" }));
// Виведе { name: 'John', age: 30, city: 'New York' }

// Завдання 2
/**
 * Функція `parseJson` намагається аналізувати вхідний JSON-рядок.
 * Якщо рядок має невірний формат, генерується помилка з відповідним текстом.
 *
 *  jsonStr - JSON-рядок для аналізу.
 */
function parseJson(jsonStr) {
  try {
    // Спроба розпарсити JSON-рядок і повернути його як об'єкт
    return JSON.parse(jsonStr);
  } catch (error) {
    // Обробка помилки
    console.error("Помилка парсингу JSON:", error.message);
    // Повернення або виконання інших дій в залежності від ваших потреб
    // return null; // або інше значення
  }
}
console.log("Завдання: 2 ==============================");

// Вхідний JSON-рядок з правильним форматом.
let validJson = '{"name":"John","age":30,"city":"New York"}';
// Вхідний JSON-рядок з неправильним форматом.
let invalidJson = '{"name":"John,"age":30,"city":"New York"}'; // Пропущена закриваюча лапка після "John".

// Спробуємо аналізувати JSON-рядки.
console.log(parseJson(validJson));
// Виведе { name: 'John', age: 30, city: 'New York' }
console.log(parseJson(invalidJson));
// Виведе Unexpected token a in JSON at position 15

// Завдання 3

/**
 * Функція `getAge` отримує вік користувача.
 * Якщо вік користувача менше 0, генерується помилка з відповідним текстом.
 *
 *  age - вік користувача.
 */
function getAge(age) {
  try {
    // Перевіряємо чи вік менше 0
    if (age < 0) {
      // Генеруємо помилку з властивістю name та повідомленням
      const error = new Error("Вік не може бути менше 0!");
      error.name = "AgeError";
      throw error;
    }
    // Повертаємо рядок з віком користувача
    return `Вік користувача: ${age}`;
  } catch (error) {
    // Обробляємо помилку
    console.error("Помилка отримання віку:", error.message);
    // Повертаємо об'єкт з властивостями name та message помилки
    return { name: error.name, message: error.message };
  }
}
console.log("Завдання: 3 ==============================");

// Виклик функції з від'ємним віком.
console.log(getAge(-1));
// Виведе { error: 'Вік не може бути менше 0!', name: 'AgeError' }
// Виклик функції з віком 20.
console.log(getAge(20));
// Виведе Вік користувача: 20

// Завдання 4
/**
 * Функція `getBookById` отримує книгу за її ID.
 * Якщо книги з таким ID не існує, генерується TypeError.
 *
 *  books - масив книг.
 *  id - ID книги.
 */
function getBookById(books, id) {
  try {
    // Знаходимо книгу за її ID
    const book = books.find((book) => book.id === id);

    // Перевіряємо, чи книга знайдена
    if (!book) {
      // Якщо книга не знайдена, генеруємо помилку TypeError
      throw new TypeError(`Книга з ID ${id} не знайдена!`);
    }

    // Повертаємо знайдену книгу
    return book;
  } catch (error) {
    // Обробляємо помилку
    console.error("Помилка отримання книги за ID:", error.message);
    // Повертаємо текстове представлення помилки
    return error.message;
  }
}
console.log("Завдання: 4 ==============================");

// Виклик функції з неіснуючим ID.

console.log(
  getBookById(
    [
      { id: 1, title: "Книга 1" },
      { id: 2, title: "Книга 2" },
    ],
    3
  )
);
// Виведе TypeError: Книга з ID 3 не знайдена!
console.log(
  getBookById(
    [
      { id: 1, title: "Книга 1" },
      { id: 2, title: "Книга 2" },
    ],
    2
  )
);
// Виведе Книга: Книга 2

// Завдання 5

/**
 * Функція `decodeURIComponentWrapper` виконує декодування рядка `encodedString`
 * з використанням функції `decodeURIComponent`. Якщо сталася помилка URIError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  encodedString - Рядок для декодування.
 */
function decodeURIComponentWrapper(encodedString) {
  try {
    // Спроба декодувати рядок
    return decodeURIComponent(encodedString);
  } catch (error) {
    // Обробка помилки
    if (error instanceof URIError) {
      // Якщо помилка є URIError, повертаємо нову помилку зі зміненим повідомленням
      return new URIError("Помилка декодування URI");
    } else {
      // Якщо інша помилка, повертаємо текстове представлення помилки
      return error.message;
    }
  }
}

console.log("Завдання: 5 ==============================");

console.log(decodeURIComponentWrapper("Hello%20World")); // виведе 'Hello World'
console.log(decodeURIComponentWrapper("%E0%A4%A")); // виведе інформацію про помилку URIError

// Завдання 6
/**
 * Функція `findEvenNumber` знаходить перше число, що ділиться на 2 без остачі в масиві.
 * Якщо такого числа немає, вона кидає помилку.
 *
 *  numbers - Масив чисел для пошуку.
 */
function findEvenNumber(numbers) {
  try {
    // Шукаємо перше парне число в масиві
    const evenNumber = numbers.find((number) => number % 2 === 0);

    // Перевіряємо, чи знайдено парне число
    if (evenNumber === undefined) {
      // Якщо парне число не знайдено, генеруємо помилку
      throw new Error("У масиві немає чисел, що діляться на 2 без остачі!");
    }

    // Повертаємо перше знайдене парне число
    return evenNumber;
  } catch (error) {
    // Обробляємо помилку
    console.error("Помилка пошуку першого парного числа:", error.message);
    // Повертаємо текстове представлення помилки
    return error.message;
  } finally {
    // Незалежно від результату, виводимо вихідний масив
    console.log("Вихідний масив:", numbers);
  }
}

console.log("Завдання: 6 ==============================");
// Виклик функції з масивом чисел.
console.log(findEvenNumber([1, 3, 5]));
// Виведе
// [ 1, 3, 5 ]
// Error: У масиві немає чисел, що діляться на 2 без остачі!;
console.log(findEvenNumber([1, 4, 5]));
// Виведе
// [ 1, 4, 5 ]
// 4

// Завдання 7
/**
 * Функція `validateUser` перевіряє об'єкт користувача на відповідність заданим вимогам.
 * Якщо об'єкт користувача не відповідає вимогам, вона кидає помилку з причиною (cause).
 *
 *  user - Об'єкт користувача для перевірки.
 */
function validateUser(user) {
  try {
    // Перевіряємо, чи існує об'єкт користувача
    if (!user) {
      throw new Error("Об'єкт користувача не вказано!");
    }

    // Перевіряємо, чи існує ім'я користувача
    if (!user.name) {
      throw new Error("Ім'я користувача не вказано!");
    }

    // Перевіряємо, чи існує email користувача
    if (!user.email) {
      throw new Error("Email користувача не вказано!");
    }

    // Якщо всі перевірки пройдено успішно, виводимо повідомлення
    console.log("Об'єкт користувача відповідає всім вимогам.");
  } catch (error) {
    // Обробляємо помилку
    console.error("Помилка валідації користувача:", error.message);
    // Виводимо повідомлення про помилку та причину помилки
    console.error("Причина помилки:", error.cause || "Не вказано");
  }
}

console.log("Завдання: 7 ==============================");

// Виклик функції з неповним об'єктом користувача.
validateUser({ name: "John Doe" });
// Виведе
// Email користувача не вказано! { name: 'John Doe' }

// Завдання 8
/**
 * Функція `calculateSquareRoot` обчислює квадратний корінь з числа.
 * Якщо аргумент не є числом, вона кидає TypeError.
 * Якщо число від'ємне, вона кидає RangeError.
 *
 *  number - Число для обчислення квадратного кореня.
 */
function calculateSquareRoot(number) {
  try {
    // Перевіряємо, чи аргумент є числом
    if (typeof number !== "number") {
      throw new TypeError("Аргумент має бути числом!");
    }

    // Перевіряємо, чи число не від'ємне
    if (number < 0) {
      throw new RangeError("Число не повинно бути від'ємним!");
    }

    // Повертаємо корінь квадратний з вхідного значення
    return Math.sqrt(number);
  } catch (error) {
    // Обробляємо помилку
    console.error("Помилка обчислення квадратного кореня:", error.message);
    // Повертаємо повідомлення про помилку
    return error.message;
  }
}

console.log("Завдання: 8 ==============================");

console.log(calculateSquareRoot(9));
// Виведе 3
console.log(calculateSquareRoot(-9));
// Виведе Число не повинно бути від'ємним!
console.log(calculateSquareRoot("abc"));
// Виведе Аргумент має бути числом!

// Завдання 9

/**
 * Функція `processData` обробляє масив чисел.
 * Якщо в масиві є не число, вона кидає TypeError.
 *
 *  data - Масив чисел для обробки.
 */
function processData(data) {
  try {
    // Для кожного елемента в масиві
    for (let i = 0; i < data.length; i++) {
      // Перевіряємо, чи елемент є числом
      if (typeof data[i] !== "number") {
        // Якщо елемент не є числом, кидаємо помилку
        throw new TypeError(`Елемент з індексом ${i} має бути числом!`);
      }
    }

    // Якщо перевірки пройшли успішно, повертаємо рядок
    return "Дані успішно оброблені";
  } catch (error) {
    // Обробляємо помилку
    console.error("Помилка обробки даних:", error.message);
    // Виводимо stack trace помилки
    console.error("Stack trace:", error.stack);
    // Повертаємо повідомлення помилки
    return error.message;
  }
}

console.log("Завдання: 9 ==============================");

// Викликаємо функцію з правильними даними
console.log(processData([1, 2, 3]));
// Виведе Дані успішно оброблені

// Викликаємо функцію з неправильними даними
console.log(processData([1, "two", 3]));
// Виведе Елемент з індексом 1 має бути числом!

// Завдання 10
/**
 * Функція `evaluateExpression` обчислює результат математичного виразу, переданого у вигляді рядка.
 * Використовується функція `eval` для обчислення виразу. Якщо виникає помилка EvalError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  expression - Математичний вираз у вигляді рядка.
 */
function evaluateExpression(expression) {
  try {
    // Обчислюємо результат математичного виразу за допомогою функції eval
    return eval(expression);
  } catch (error) {
    // Обробляємо помилку EvalError
    if (error instanceof EvalError) {
      console.error("Помилка обчислення виразу:", error.message);
      // Повертаємо повідомлення про помилку
      return "Помилка обчислення виразу";
    } else {
      // Інші типи помилок передаємо далі
      throw error;
    }
  }
}

console.log("Завдання: 10 ==============================");

console.log(evaluateExpression("2 + 2")); // виведе 4
console.log(evaluateExpression("10 / hello")); // виведе EvalError: hello is not defined та інформацію про помилку
