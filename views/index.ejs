// views/index.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vulnerable Web App</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="container">
    <h1>Welcome to VulnerableApp</h1>
    
    <div class="card">
      <h2>Search Products</h2>
      <form action="/search" method="GET">
        <input type="text" name="term" placeholder="Search products..." required>
        <button type="submit">Search</button>
      </form>
    </div>
    
    <div class="card">
      <h2>User Login</h2>
      <% if (locals.error) { %>
        <div class="error-message"><%= error %></div>
      <% } %>
      <form action="/login" method="POST">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    
    <div class="info-box">
      <h3>About This App</h3>
      <p>This is a deliberately vulnerable web application created for educational purposes and security testing.</p>
      <p>DO NOT use this application in a production environment.</p>
    </div>
  </div>
</body>
</html>

// views/search.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Results - VulnerableApp</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="container">
    <h1>Search Results for "<%= searchTerm %>"</h1>
    
    <a href="/" class="back-link">Back to Home</a>
    
    <div class="results-container">
      <% if (products.length > 0) { %>
        <table class="results-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <% products.forEach(product => { %>
              <tr>
                <td><%= product.id %></td>
                <td><%= product.name %></td>
                <td><%= product.description %></td>
                <td>$<%= product.price.toFixed(2) %></td>
              </tr>
            <% }); %>
          </tbody>
        </table>
      <% } else { %>
        <div class="no-results">
          <p>No products found matching your search.</p>
        </div>
      <% } %>
    </div>
    
    <div class="search-again">
      <h3>Search Again</h3>
      <form action="/search" method="GET">
        <input type="text" name="term" value="<%= searchTerm %>" required>
        <button type="submit">Search</button>
      </form>
    </div>
  </div>
</body>
</html>

// views/dashboard.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Dashboard - VulnerableApp</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="container">
    <h1>Welcome, <%= user.username %>!</h1>
    
    <div class="user-info">
      <h2>Your Account Information</h2>
      <table>
        <tr>
          <th>Username:</th>
          <td><%= user.username %></td>
        </tr>
        <tr>
          <th>Email:</th>
          <td><%= user.email %></td>
        </tr>
        <tr>
          <th>Role:</th>
          <td><%= user.is_admin ? 'Administrator' : 'Regular User' %></td>
        </tr>
      </table>
    </div>
    
    <% if (user.is_admin) { %>
      <div class="admin-section">
        <h2>Admin Options</h2>
        <a href="/admin" class="button">Access Admin Panel</a>
      </div>
    <% } %>
    
    <a href="/" class="back-link">Logout</a>
  </div>
</body>
</html>

// views/admin.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Panel - VulnerableApp</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="container">
    <h1>Admin Panel</h1>
    
    <div class="admin-section">
      <h2>User Management</h2>
      <table class="results-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          <% users.forEach(user => { %>
            <tr>
              <td><%= user.id %></td>
              <td><%= user.username %></td>
              <td><%= user.email %></td>
              <td><%= user.password %></td>
              <td><%= user.is_admin ? 'Yes' : 'No' %></td>
            </tr>
          <% }); %>
        </tbody>
      </table>
    </div>
    
    <a href="/" class="back-link">Back to Home</a>
  </div>
</body>
</html>
