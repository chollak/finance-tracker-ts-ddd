// import { UserService } from './src/services/UserService';
// import { AccountService } from './src/services/AccountService';
// import { BudgetService } from './src/services/BudgetService';
// import { NotionRepository } from './src/repositories/NotionRepository';
// import { FileRepository } from './src/repositories/FileRepository';
// import { UserRepository } from './src/repositories/UserRepository';
// import { AccountRepository } from './src/repositories/AccountRepository';
// import { Budget } from './src/domain/Budget';

// const notionRepository = new NotionRepository();
// const fileRepository = new FileRepository();
// const userRepository = new UserRepository(notionRepository, fileRepository);
// const accountRepository = new AccountRepository();

// const userService = new UserService(userRepository);
// const accountService = new AccountService(accountRepository);
// const budgetService = new BudgetService(new Budget());

// const user = userService.createUser('John Doe');
// const account = accountService.createAccount('Bank Account', 1000, 'USD');
// userService.addUserAccount(user.getId(), account);

// budgetService.setAccountLimit(account, 500);

// console.log(user);