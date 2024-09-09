const fs = require("fs");
const path = require("path");

// Пример структуры
const structure = `
src
    domain
        User.ts
        Account.ts
        Budget.ts
        Transaction.ts
        Category.ts
    services
        UserService.ts
        AccountService.ts
        BudgetService.ts
        TransactionService.ts
        DebtService.ts
    repositories
        NotionRepository.ts
        FileRepository.ts
        UserRepository.ts
        AccountRepository.ts
    test-cases
        full-scenario.ts
index.ts
data
    users.json
    accounts.json
    budgets.json
    debts.json
    transactions.json
    categories.json
README.md
`;

// Функция для создания директорий и файлов
function createStructure(structure) {
  const lines = structure.trim().split("\n");
  const stack = [process.cwd()]; // Стек для отслеживания текущего пути

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    const level = line.search(/\S/); // Определяем уровень вложенности
    const currentDir = stack[Math.floor(level / 4)]; // Рассчитываем текущую директорию

    const fullPath = path.join(currentDir, trimmedLine);

    if (path.extname(trimmedLine)) {
      // Создаем файл
      fs.writeFileSync(fullPath, "");
      console.log(`File created: ${fullPath}`);
    } else {
      // Создаем директорию
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Directory created: ${fullPath}`);
    }

    // Обновляем стек путей для следующего уровня вложенности
    if (stack.length > Math.floor(level / 4) + 1) {
      stack.splice(Math.floor(level / 4) + 1);
    }
    stack.push(fullPath);
  });
}

createStructure(structure);
