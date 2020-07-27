<template>
  <section class="homepage-section container">
    <h2>Vacation rentals for every style</h2>

    <section class="list-3">
      <el-card class="card" :body-style="{ padding: '0px' }">
        <section v-on:click="getTopRated">
          <img
            src="https://a0.muscache.com/4ea/air/v2/pictures/10598512-e0f5-41ae-bb95-330997aad615.jpg?im_w=720"
            class="image"
          />
          <div style="padding: 14px;">
            <h4>Top Rated</h4>
            <p>Top rated locations around the world.</p>
            <div class="bottom clearfix"></div>
          </div>
        </section>
      </el-card>

      <el-card class="card" :body-style="{ padding: '0px' }">
        <section v-on:click="getNearby">
          <img
            src="https://a0.muscache.com/im/pictures/ef0ee86b-feba-47f8-8882-014b2a7b6926.jpg?im_w=720"
            class="image"
          />
          <div style="padding: 14px;">
            <h4>Nearby getaways</h4>
            <p>Unplug or reconnect on a trip that's just short drive away.</p>

            <div class="bottom clearfix"></div>
          </div>
        </section>
      </el-card>

      <el-card class="card" :body-style="{ padding: '0px' }">
        <section v-on:click="getEntire">
          <img
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            class="image"
          />
          <div style="padding: 14px;">
            <h4>Entire homes</h4>
            <p>Comfortable private places, with room for friends or family.</p>
            <div class="bottom clearfix"></div>
          </div>
        </section>
      </el-card>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        location: "",
        checkIn: "",
        checkOut: "",
        adultNumber: "",
        childrenNumber: "",
        rating: "",
        type: ""
      }
    };
  },
  methods: {
    sendFilter(city) {
      this.$emit("setSuggested", this.filterBy);
      this.$router.push("/app");
    },
    getTopRated() {
      this.filterBy.rating = 4.8;
      this.sendFilter();
    },
    getNearby() {
      this.filterBy.location = "tel aviv";
      this.sendFilter();
    },
    getEntire() {
      this.filterBy.type = "entire homes";
      this.sendFilter();
    }
  }
};
</script>


<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>