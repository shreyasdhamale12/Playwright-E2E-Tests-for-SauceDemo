export const users = [

  // VALID LOGIN
  { username: "standard_user", password: "secret_sauce", expected: "success" },

  // INVALID SAUCEDEMO USERS
  { username: "locked_out_user", password: "secret_sauce", expected: "error" },

  // USERS WITH UI/APP-SPECIFIC BEHAVIOR
  { username: "problem_user", password: "secret_sauce", expected: "success" },
  { username: "performance_glitch_user", password: "secret_sauce", expected: "success" },
  { username: "error_user", password: "secret_sauce", expected: "success" },
  { username: "visual_user", password: "secret_sauce", expected: "success" },

  // SQL Injection (should NOT login)
  { username: "' OR 1=1 --", password: "random", expected: "blocked" },
  { username: "admin' --", password: "test", expected: "blocked" },
  { username: "' OR ''='", password: "test", expected: "blocked" },

  // SPECIAL CHAR PAYLOADS
  { username: "!!!@@@###", password: "123", expected: "error" },

  // BLANK PAYLOAD
  { username: "   ", password: "   ", expected: "error" },

  // XSS PAYLOAD
  { username: "<script>alert(1)</script>", password: "123", expected: "error" }
];
