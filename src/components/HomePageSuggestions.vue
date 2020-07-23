<template>

  <section class="home-page-suggestions container">
     <h2>Vacation rentals for every style</h2>
  
    <section class="img-container flex">


            <el-card class="card" :body-style="{ padding: '0px' }">
            <img src="https://a0.muscache.com/im/pictures/ef0ee86b-feba-47f8-8882-014b2a7b6926.jpg?im_w=720" class="image">
            <div style="padding: 14px;">
                <p>Entire homes</p>
                <p>Comfortable private places, with room for friends or family.</p>
                <div class="bottom clearfix">
                </div>
            </div>
        </el-card>

            <el-card class="card" :body-style="{ padding: '0px' }">
            <img src="https://a0.muscache.com/im/pictures/ef0ee86b-feba-47f8-8882-014b2a7b6926.jpg?im_w=720" class="image">
            <div style="padding: 14px;">
                            <p>Nearby getaways</p>
                <p>Unplug or reconnect on a trip that's just short drive away.</p>

                <div class="bottom clearfix">
                </div>
            </div>
        </el-card>


            <el-card class="card" :body-style="{ padding: '0px' }">
            <img src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=1690" class="image">
            <div style="padding: 14px;">
                <p>Entire homes</p>
                <p>Comfortable private places, with room for friends or family.</p>
                <div class="bottom clearfix">
                </div>
            </div>
        </el-card>


        </section>
    </section>
</template>

<script>
export default {
  data() {
    return {
    };
  }
}
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
      clear: both
  }
</style>