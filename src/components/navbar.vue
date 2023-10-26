<template>
  <nav class="navbar navbar-expand-lg   bg-light" >
    <div class="container">
      <a class="navbar-brand" href="#">AOS sosyall </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">paylaş</a>
          </li>
        </ul>
          <div class="d-flex" >
            <router-link to="/login">
              <button class="btn btn-outline-success" type="submit">Giriş</button>
            </router-link>
          <button class="btn btn-outline-danger" type="submit">Çikiş</button>
          </div>
       
      </div>
    </div>
  </nav>
</template>
<style>
html,body{
  background: #dad7cd;
}
</style>
