// **************************
// A. Establish dependencies
const splashPage = require('ascii-art');
const { prompt } = require('inquirer');
require('console.table');


// **************************
// B. Connect to db directory
const db = require('./db');


// **************************
// C. Arrays holding task options

// 01. CRUD task types
let actionTypes = ['Add Data', 'Delete Data', 'View Data', 'Update Data', 'Quit'];

// 02. Add data
let addDataMenu = [
    {
        name: 'Add Department',
        value: 'ADD_DEPARTMENT'
    },
    {
        name: 'Add Role',
        value: 'ADD_ROLE'
    },
    {
        name: 'Add Employee',
        value: 'ADD_EMPLOYEE'
    }
];

// 03. Remove data
let removeDataMenu = [
    {
        name: 'Delete Department',
        value: 'DELETE_DEPARTMENT'
    },
    {
        name: 'Delete Role',
        value: 'DELETE_ROLE'
    },
    {
        name: 'Delete Employee',
        value: 'DELETE_EMPLOYEE'
    }
];

// 04. View data
let viewDataMenu = [
    {
        name: 'View Departments',
        value: 'VIEW_DEPARTMENTS'
    },
    {
        name: 'View Roles',
        value: 'VIEW_ROLES'
    },
    {
        name: 'View Employees',
        value: 'VIEW_EMPLOYEES'
    },
    {
        name: 'View Employees By Department',
        value: 'VIEW_EMPLOYEES_BY_DEPARTMENT'
    },
    {
        name: 'View Employees By Manager',
        value: 'VIEW_EMPLOYEES_BY_MANAGER'
    },
    {
        name: 'View Employees By Role',
        value: 'VIEW_EMPLOYEES_BY-ROLE'
    },
    {
        name: 'View Utilized Budget By Department',
        value: 'VIEW_BUDGET_BY_DEPARTMENT'
    }
];

// 06. Update data
let updateDataMenu = [
    {
        name: `Update Employee's Department`,
        value: 'UPDATE_EMPLOYEE_DEPARTMENT'
    },
    {
        name: `Update Employee's Role`,
        value: 'UPDATE_EMPLOYEE_ROLE'
    },
    {
        name: `Update Employee's Manager`,
        value: 'UPDATE_EMPLOYEE_MANAGER'
    }
];


// **************************
// D. Processing functions

// 01. Initialize application
function init() {
    createWelcomeGraphic();
    console.log('WELCOME TO ASSOCIATE MANAGER!');
    console.log('FOLLOW THE PROMPTS TO COMPLETE YOUR TASKS.');
};

// 02. Create splash page
function createWelcomeGraphic() {

};

// 03. Prompt user for action type
async function displayMenus() {
    let { actionTypeChoice } = await determineActionType([
        {
            name: 'actionType',
            type: 'list',
            message: 'Select the type of action you wish to perform.',
            choices: actionTypes
        }
    ]);

    switch (actionTypeChoice) {
        case 'Add Data':
            selectTask(addDataMenu);
        case 'Delete Data':
            selectTask(deleteDataMenu);
        case 'Update Data':
            selectTask(updateDataMenu);
        case 'View Data':
            selectTask(viewDataMenu);
        case 'Quit':
            console.log('THANK YOU FOR USING ASSOCIATE MANAGER!');
            return; 
    }  
};

// 04. Prompt user to select task
async function selectTask(taskCategoryMenu) {
    let { taskNameChoice } = await determineTaskToDo([
        {
            name: 'taskToDo',
            type: 'list',
            message: 'Which task would you like to do?',
            choices: taskCategoryMenu
        }
    ]);

    switch (taskNameChoice) {
        case 'Add Department':
            return addDepartment();
        case 'Add Role':
            return addRole();
        case 'Add Employee':
            return addEmployee();
        case 'Delete Department':
            return deleteDepartment();
        case 'Delete Role':
            return deleteRole();
        case 'Delete Employee':
            return deleteEmployee();
        case `Update Employee's Department`:
            return updateEmployeeDepartment();
        case `Update Employee's Role`:
            return updateEmployeeRole();
        case `Update Employee's Manager`:
            return updateEmployeeManager();
        case 'View Departments':
            return viewDepartments();
        case 'View Roles':
            return viewRoles();
        case 'View Employees':
            return viewEmployees();
        case 'View Employees By Department':
            return viewEmployeesByDepartment();
        case 'View Employees By Manager':
            return viewEmployeesByManager();
        case 'View Employees By Role':
            return viewEmployeesByRole();
        case 'View Utilized Budget By Department':
            return viewBudgetByDepartment();
    } 
}; 


// **************************
// E. Database functions

// 01. Adding data

// a. Add department
async function addDepartment() {

};

// b. Add role
addRole();

// c. Add employee
addEmployee();


// -------------------------------
// 02. Deleting data

// a. Delete department
deleteDepartment();

// b. Delete role
deleteRole();

// c. Delete employee
deleteEmployee();


// -------------------------------
// 03. Editing employee data

// a. Editing department
updateEmployeeDepartment();

// b. Editing role
updateEmployeeRole();

// c. Editing manager
updateEmployeeManager();


// -------------------------------
// 04. Viewing data

// a. View all departments
async function viewDepartments() {
    const departmentList = await db.obtainAllDepartments();

    console.log(`\nTASK: VIEW ALL DEPARMENTS\n`);
    console.table(departmentList);

    displayMenus();
};

// b. View all roles
async function viewRoles() {
    const roleList = await db.obtainAllRoles();

    console.log(`\nTASK: VIEW ALL ROLES\n`);
    console.table(roleList);

    displayMenus();
};

// c. View all employees
async function viewEmployees() {
    const employeeList = await db.obtainAllEmployees();

    console.log(`\nTASK: VIEW ALL EMPLOYEES\n`);
    console.table(employeeList);

    displayMenus();
};

// d. View all employees by department
async function viewEmployeesByDepartment() {
    const departmentList = await db.obtainAllDepartments();

    const departmentEmployees = departmentList.map(({ employeeName, employeeID }) => )

    console.log(`\nTASK: VIEW ALL EMPLOYEES BY DEPARMENT\n`);


};

// e. View all employees by manager
async function viewEmployeesByManager() {
    const employeeList = await db.obtainAllEmployees();

    const = departmentList.map(({ employeeName, employeeID }) => )

    console.log(`\nTASK: VIEW ALL EMPLOYEES BY DEPARMENT\n`);


};

// f. View all employees by role
viewEmployeesByRole();

// g. View budget by department
viewBudgetByDepartment();


