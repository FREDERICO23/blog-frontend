<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/blogs">Blogs</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2024 My Blog Application</p>
    </footer>
  </div>
</template>

<script setup>
// No additional setup needed
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  margin-bottom: 20px;
}

nav {
  padding: 20px 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

main {
  min-height: 300px;
}

footer {
  margin-top: 40px;
  text-align: center;
  font-size: 0.9em;
  color: #666;
}
</style>