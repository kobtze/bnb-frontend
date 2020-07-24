<template>
  <section>
    <header class="main-header">
      <div class="container flex space-between align-center">
        <div class="flex-start flex">
          <div class="flex-start logo-symbol">
            <svg width="30" height="32" fill="currentcolor" style="display:block">
              <path
                d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"
              />
            </svg>
          </div>
          <div class="flex-end logo-word">airbnb</div>
        </div>
        
        <ul class="main-nav flex align-center space-between clean-list">
          <svg
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            style="display: block; height: 16px; width: 16px; fill: currentcolor;"
          >
            <path
              d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"
            />
          </svg>
          <li>
            <a href="#">host your home</a>
          </li>
          <li>
            <a href="#">switch to hosting</a>
          </li>
          <li>
            <a href="#">help</a>
          </li>
          <div class="btn-main-container">
            <div class="btn-container">
              <button
                @click="onToggleMenu"
                class="btn-menu flex space-between"
                type="button"
                aria-expanded="false"
                data-testid="cypress-headernav-profile"
              >
                <span aria-label="Main navigation Screen">
                  <svg
                    aria-hidden="true"
                    role="presentation"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
                  >
                    <g fill="none" fill-rule="nonzero">
                      <path d="m2 16h28" />
                      <path d="m2 24h28" />
                      <path d="m2 8h28" />
                    </g>
                  </svg>
                </span>
                <img
                  class="profile-picture"
                  src="https://a0.muscache.com/im/pictures/user/97e2b64e-61da-4d4b-953e-65d6dc0e92fd.jpg?aki_policy=profile_medium"
                  alt
                />

                <div class="notifications">3</div>
              </button>
              <div v-show="toggleMenu" class="menu-modal">
                <div class="login" @click="onToggleScreen">Login</div>
                <div class="logout" @click="onToggleMenu">Sign up</div>
                <div class="logout" @click="onToggleMenu">Logout</div>
              </div>
              <div v-show="toggleScreen" class="post-modal">
                <div class="login-modal">
                  <div class="form-group">
                    <label for="usrname">
                      <span class="glyphicon glyphicon-user"></span> Username
                    </label>
                    <input type="text" class="form-control" id="usrname" placeholder="Enter email" />
                  </div>
                  <div class="form-group">
                    <label for="psw">
                      <span class="glyphicon glyphicon-eye-open"></span> Password
                    </label>
                    <input type="text" class="form-control" id="psw" placeholder="Enter password" />
                  </div>
                </div>
                <div class="close-modal" @click.stop="onToggleScreen">
                  <svg
                    aria-label="Close"
                    class="_8-yf5"
                    fill="#ffffff"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </header>
  </section>
</template>



<script>
export default {
  data() {
    return {
      toggleScreen: false,
      toggleMenu: false
    };
  },
  methods: {
    onToggleScreen() {
      this.toggleMenu = false;
      this.toggleScreen = !this.toggleScreen;
      console.log(this.toggleScreen, " this.toggleScreen");
    },
    onToggleMenu() {
      this.toggleMenu = !this.toggleMenu;
      console.log(this.toggleMenu, " this.toggleMenu");
    }
  }
};
</script>

<style>
</style>
