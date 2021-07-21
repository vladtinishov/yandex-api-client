<template>
  <div>
    <h1>Создать объявление</h1>
    <ul>
      <li>
        <router-link class="link" to="textad"
          ><button class="btn btn-secondary">
            Текстовое объявление
          </button></router-link
        >
      </li>
      <li>
        <router-link class="link" to="dynamicad"
          ><button class="btn btn-secondary">
            Динамическое объявление
          </button></router-link
        >
      </li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: center;
}
li {
  margin: 0 10px;
}
.link {
  text-decoration: none;
  color: white;
}
div {
  padding: 50px 0;
  background: rgb(151, 214, 203);
  margin-bottom: 20px;
}
h1 {
  margin: 0;
  padding: 0;
}
button {
  margin-top: 20px;
}
</style>