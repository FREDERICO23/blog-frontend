<template>
    <div class="home">
      <h1>Welcome to My Blog</h1>
      <p>Here you can find a collection of articles on various topics.</p>
      <router-link to="/blogs" class="cta-button">View All Articles</router-link>
    </div>
  </template>
  
  <script setup>
  // No setup needed for this component
  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2em;
    margin-bottom: 30px;
  }
  
  .cta-button {
    display: inline-block;
    background-color: #42b983;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #3aa876;
  }
  </style>