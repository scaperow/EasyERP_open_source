define([], function () {
    return {
        PERSONS           : 'Persons',
        COMPANIES         : 'Companies',
        LEADS             : 'Leads',
        OPPORTUNITIES     : 'Opportunities',
        PROJECTS          : 'Projects',
        TASKS             : 'Tasks',
        EMPLOYEES         : 'Employees',
        APPLICATIONS      : 'Applications',
        JOBPOSITIONS      : 'JobPositions',
        BIRTHDAYS         : 'Birthdays',
        DEPARTMENTS       : 'Departments',
        USERS             : 'Users',
        PROFILES          : 'Profiles',
        ORDERS            : 'Orders',
        INVOICES          : 'Invoices',
        QUOTATIONS        : 'Quotations',
        DASHBOARD         : 'Dashboard',
        DEGREES           : 'Degrees',
        SOURCEOFAPPLICANTS: 'SourceOfApplicants',
        LEADSWORKFLOW     : 'LeadsWorkflow',
        MYPROFILE         : 'myProfile',
        PRODUCT           : 'Product',
        SUPPLIERPAYMENTS  : 'supplierPayments',
        CUSTOMERPAYMENTS  : 'customerPayments',
        SALESQUOTATIONS   : 'salesQuotations',
        SALESORDERS       : 'salesOrders',
        SALESINVOICES     : 'salesInvoices',
        SALESPRODUCT      : 'salesProduct',
        WTRACK            : 'wTrack',
        PAYROLLEXPENSES   : 'PayrollExpenses',
        REVENUE           : 'Revenue',
        MONTHHOURS        : 'monthHours',
        BONUSTYPE         : 'bonusType',
        HOLIDAY           : 'Holiday',
        VACATION          : 'Vacation',
        ATTENDANCE        : 'Attendance',
        DASHBOARD_VACATION: 'DashBoardVacation',
        DASHBOARD_HR      : 'HrDashboard',
        EFFICIENCY        : 'Efficiency',
        CAPACITY          : 'Capacity',
        JOBSDASHBOARD     : 'jobsDashboard',
        PAYROLLPAYMENTS   : 'PayrollPayments',
        PRODUCTSETTINGS   : 'productSettings',
        INVOICEAGING      : 'invoiceAging',
        CHARTOFACCOUNT    : 'ChartOfAccount',
        JOURNAL           : 'journal',
        JOURNALENTRY      : 'journalEntry',
        INVENTORYREPORT   : 'inventoryReport',
        INVOICECHARTS     : 'invoiceCharts',
        SALARYREPORT      : 'salaryReport',
        TRIALBALANCE      : 'trialBalance',
        PROFITANDLOSS     : 'profitAndLoss',
        BALANCESHEET      : 'balanceSheet',
        CASHFLOW          : 'cashFlow',
        CLOSEMONTH        : 'closeMonth',
        SALESPROFORMA     : 'salesProforma',
        EXPENSESINVOICE   : 'ExpensesInvoice',
        EXPENSESPAYMENTS  : 'ExpensesPayments',
        DIVIDENDINVOICE   : 'DividendInvoice',
        DIVIDENDPAYMENTS  : 'DividendPayments',
        SETTINGSEMPLOYEE  : 'settingsEmployee',

        RESPONSES: {
            BAD_RESPONSE            : 'Please try again',
            CREATE_QUOTATION        : 'Supplier and project fields can not be empty!',
            CONFIRM_ORDER           : 'Please add at most one product to quotation',
            DOUBLE_EMPLOYEE_VACATION: 'Current Employee already has vacation line'
        },

        INVOICE_APPROVE_PROFILES: [
            1387275598000,
            1438768659000
        ],

        EXPENSESCAREGORY: '56459202624e48551dfe3b24',

        WTRACK_DB_NAME   : 'weTrack',
        FILTERVALUESCOUNT: 7,
        DEPARTMENTS_ORDER: [
            'iOS',
            'Android',
            'Web',
            'WP',
            'QA',
            'Design',
            'PM'
        ],

        SPECIAL_CONTENT_TYPES: [
            'wTrack',
            'ChartOfAccount'
        ],

        SELECTP_ROJECT: 'Please select a Project',

        IT_SERVICES: 'IT services',

        END_CONTRACT_WORKFLOW_ID: '52d2c1369b57890814000005',
        TRASH_BIN               : "<a class='fa fa - trash'></a>",

        DASH_VAC_WEEK_BEFORE    : 2,
        DASH_VAC_WEEK_AFTER     : 8,
        DASH_VAC_RANGE_WEEKS_MIN: 6,

        DEFAULT_ELEMENTS_PER_PAGE  : 100,
        DEFAULT_THUMBNAILS_PER_PAGE: 50,

        URLS: {
            PROFILES_FOR_DD           : '/profiles/forDd',
            CURRENT_USER              : '/users/current',
            USERS                     : '/users/',
            USERS_FOR_DD              : '/users/forDd',
            APPLICATIONS              : '/applications/',
            EMPLOYEES                 : '/employees/',
            CHARTOFACCOUNT            : '/ChartOfAccount/',
            COMPANIES                 : '/companies/',
            DEGREES                   : '/Degrees/',
            DEPARTMENTS               : '/departments/',
            EVENTS                    : '/Events/',
            HOLIDAY                   : '/Holiday/',
            INVOICES                  : '/invoices/',
            JOBPOSITIONS              : '/JobPositions/',
            JOURNALENTRY              : '/journalEntries/',
            JOURNAL                   : '/journals/',
            LEADS                     : '/leads/',
            MONTHHOURS                : '/monthHours/',
            OPPORTUNITIES             : '/Opportunities/',
            PAYMENT                   : '/payment/',
            PAYROLL                   : '/payroll/',
            PERSONS                   : '/persons/',
            PRODUCT                   : '/products/',
            PROFILES                  : '/profiles/',
            PROJECTS                  : '/projects/',
            PROJECTS_GET_FOR_WTRACK   : '/projects/getForWtrack',
            PROJECTS_GET_FOR_QUOTATION: '/projects/getForQuotation',
            QUOTATIONS                : '/quotations/',
            SOURCESOFAPPLICANTS       : '/SourcesOfApplicants/',
            TASKS                     : '/Tasks/',
            VACATION                  : '/vacation/',
            WTRACK                    : '/wTrack/',
            BIRTHDAYS                 : '/employees/birthdays/',
            BONUSTYPE                 : '/bonusType/',
            BONUSTYPE_FORDD           : '/bonusType/getForDD',
            CAPACITY                  : '/capacity/',
            PAYMENTCUSTOMERS          : '/payment/',
            EMPLOYEES_PERSONSFORDD    : '/employees/getPersonsForDd',
            CUSTOMERS                 : '/customers/',
            DASHBOARD_HR              : 'dashboard/hr',
            DASHBOARD_VACATION        : 'dashboard/vacation',
            EMPLOYEES_GETFORDD        : '/employees/getForDD',
            EMPLOYEES_ALPHABET        : '/employees/getEmployeesAlphabet',
            INVOICE_STATS             : '/invoices/stats/',
            REVENUE_SYNTHETIC         : 'revenue/synthetic',
            JOBS                      : '/jobs/',
            JOBS_DASHBOARD            : '/jobs/getForOverview',
            JOURNAL_ENTRY             : '/journalEntries/',
            WORKFLOWS                 : '/workflows/',
            MODULES                   : '/modules/',
            PAYMENT_SALARY            : '/payment/',
            PRIORITY                  : '/Priority',
            PRODUCT_ALPHABET          : '/products/getProductsAlphabet',
            CATEGORY                  : '/category/',
            PROJECT_DASHBOARD         : 'project/getProjectPMForDashboard',
            PAYMENT_SUPPLIER          : '/payment/',
            APPLICATIONS_WFLENGTH     : '/applications/getApplicationsLengthByWorkflows',
            APPLICATIONS_KANBAN       : '/applications/',
            EMPLOYEES_NATIONALITY     : '/employees/nationality',
            JOBPOSITIONS_JOBTYPE      : '/jobPositions/jobType',
            JOBPOSITIONS_FORDD        : '/jobPositions/getForDd',
            DEPARTMENTS_FORDD         : '/departments/getForDD',
            WORKFLOWS_FORDD           : '/workflows/getWorkflowsForDd',
            EMPLOYEES_RELATEDUSER     : '/employees/getForDdByRelatedUser',
            PROJECT_TYPE              : '/projects/projectType',
            EMPLOYEES_LANGUAGES       : '/employees/languages',
            DEPARTMENTS_FOREDITDD     : '/departments/getDepartmentsForEditDd',
            CURRENCY_FORDD            : '/currency/getForDd',
            SUPPLIER                  : '/supplier',
            WORKFLOWS_FETCH           : '/workflows/fetch',
            PAYMENT_AMOUNT_LEFT       : '/payment/amountLeftCalc',
            SALARY_REPORT             : '/salaryReport/'
        },

        MID: {
            Employees   : 42,
            Applications: 43,
            Persons     : 49,
            Companies   : 50
        },

        MIN_DATE: '2014-08-01',

        INVOICE_JOURNAL : '565ef6ba270f53d02ee71d65',
        PROFORMA_JOURNAL: '57035e4321f9b0c4313d4146',
        PAYMENT_TERMS   : '55536e52475b7be475f335f6',
        PAYMENT_METHOD  : '565f2e05ab70d49024242e07',
        END_OF_PROJECT  : 'To end of project',

        DEFAULT_SCREEN_WIDTH: 1349,
        PAGINATION_ARRAY    : [25, 50, 100, 200]
    };
});
