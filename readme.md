# Allure report:  

<img width="1908" height="588" alt="image" src="https://github.com/user-attachments/assets/574a9d3b-b9ec-4fa1-a678-4344e4d819b0" />


# 🧪 Playwright Automation Framework – SauceDemo Testing

This repository contains an end-to-end UI automation framework using **Playwright** with **JavaScript/TypeScript**, built to test the functionality of the **SauceDemo** e-commerce application.

The framework follows modern testing practices with:
- Page Object Model (POM)
- Cross-browser testing
- Parallel test execution
- Allure Reporting
- Clean folder structure for scalability

---

# 🛒 **About SauceDemo**

[SauceDemo](https://www.saucedemo.com/) is a sample e-commerce application used for testing and QA automation practice.  
It includes:

- User Login functionality  
- Product listing  
- Add-to-cart / Remove functionality  
- Checkout workflow  
- Order completion  
- Error message validations  
- Performance & locked-out user scenarios  

This makes it an ideal web application for automation testing.

---

# ✔️ **What We Tested**

## 🔐 **1. Login Module**
- Valid users  
- Locked-out users  
- Problem users (UI issues)  
- Performance glitch users  
- Invalid credential validations  
- Error message handling  

## 🛒 **2. Cart Module**
- Add items to cart  
- Remove items  
- Validate cart count  
- Navigate cart → checkout  

## 💳 **3. Checkout Module**
- Enter checkout information  
- Validate mandatory fields  
- Verify price calculations  
- Validate successful order place  

## 📊 **4. Assertions & Error Handling**
- UI element validations  
- Page navigation  
- Button state validation  
- Screenshot capture on failure  

Each flow was automated with Playwright using best practices and independent test files.

---

# 📁 **Project Structure**

```
├── tests/
│   ├── login/
│   ├── cart/
│   ├── checkout/
│   └── functional/
├── pages/
├── playwright.config.ts
├── package.json
├── allure-results/
└── README.md
```

---

# 🚀 **How to Run This Project**

## **1️⃣ Install Node.js**

Download & install Node.js LTS:  
https://nodejs.org/

Verify installation:
```bash
node -v
npm -v
```

---

## **2️⃣ Install Dependencies**

Run inside the project root:

```bash
npm install
```

---

## **3️⃣ Install Playwright Browsers**

```bash
npx playwright install
```

---

## **4️⃣ Run All Tests**

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login/login-all-users.spec.ts
```

Run a group of tests:

```bash
npx playwright test tests/functional
```

Run with UI mode:

```bash
npx playwright test --ui
```

---

# 📊 **Allure Report Setup (Windows, macOS, Linux)**

Allure gives a beautiful dashboard with:

* Test steps
* Attachments/screenshots
* Execution history
* Passed/Failed/Skipped breakdown

---

## **1️⃣ Install Java (Required)**

Allure needs Java 8 or higher.

Download from:
[https://adoptium.net/](https://adoptium.net/)

Check installation:

```bash
java -version
```

---

## **2️⃣ Install Allure (ZIP Installation – No Scoop Needed)**

### Step A — Download Allure ZIP

Download the latest Allure Commandline ZIP from:
[https://github.com/allure-framework/allure2/releases](https://github.com/allure-framework/allure2/releases)

File example:

```
allure-2.20.1.zip
```

### Step B — Extract the ZIP

Place it in:

```
C:\allure\
```

### Step C — Add to PATH

Add this to System Environment Variables → PATH:

```
C:\allure\bin
```

Open new terminal → test installation:

```bash
allure --version
```

---

# 🧾 **Generate Allure Report**

After running tests, Playwright creates:

```
allure-results/
```

To generate the HTML report:

```bash
allure generate ./allure-results --clean
```

To open the report:

```bash
allure open
```

This opens a full dashboard in your browser.

---

# 📷 **Screenshots & Attachments**

Playwright captures:

* Trace
* Screenshots
* Steps
* Network logs (optional)

These appear automatically in the Allure Report.

---

# 🧩 **Technologies Used**

* **Playwright** – UI Automation
* **TypeScript / JavaScript**
* **Node.js**
* **Allure Reports**
* **Page Object Model (POM)**
* **Fixtures**

---
