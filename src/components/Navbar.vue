<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-section navbar-brand">
        <router-link to="/">123 Shop</router-link>
      </div>
      <div class="navbar-section navbar-search">
        <input type="text" placeholder="Search..." />
        <div class="popular-searches">
          <span>熱門搜尋：</span>
          <router-link to="/search?q=product1">產品1</router-link>
          <router-link to="/search?q=product2">產品2</router-link>
          <router-link to="/search?q=product3">產品3</router-link>
        </div>
      </div>
      <div class="navbar-section navbar-cart">
        <router-link to="/cart">Cart</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem;
  overflow: auto; /* Ensure scrollbars appear if content overflows */
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* Fixed width */
  margin: 0 auto; /* Center container horizontally */
  padding: 0 1rem; /* Optional horizontal padding */
  box-sizing: border-box; /* Ensure padding is included in the width */
}

.navbar-section {
  flex: 1;
}

.navbar-brand {
  text-align: left;
}

.navbar-brand a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
}

.navbar-search {
  text-align: center;
}

.navbar-search input {
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 4px;
  border: none;
}

.popular-searches {
  display: inline-block;
  margin-top: 0.5rem;
  color: #ccc;
}

.popular-searches span {
  margin-right: 0.5rem;
}

.popular-searches a {
  color: #ccc;
  text-decoration: none;
  margin-right: 0.5rem;
}

.popular-searches a:hover {
  text-decoration: underline;
}

.navbar-cart {
  text-align: right;
}

.navbar-cart a {
  color: white;
  text-decoration: none;
}
</style>
