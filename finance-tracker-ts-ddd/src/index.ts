import { RepositoryFactory } from './repositories/RepositoryFactory';
import { UserService } from './services/UserService';
import { AccountService } from './services/AccountService';
import { BudgetService } from './services/BudgetService';
import { Account } from './domain/Account';
import { Budget } from './domain/Budget';

const userRepository = RepositoryFactory.createUserRepository('file');
const userService = new UserService(userRepository);

// Создание объекта бюджета с аргументами
const budgetService = new BudgetService(new Budget('budget1', 'Groceries', 500));

// Создаем пользователя
const user = await userService.createUser('1', 'John Doe');

// Создаем аккаунт
const account = new Account('account1', 'Bank Account', 1000, 'USD');
await userService.addUserAccount(user.getId(), account);  // Используем `await` и исправляем вызов метода

// Устанавливаем лимит бюджета
budgetService.setAccountLimit(account, 500);

console.log(user);
console.log(account);