<template>

  <section class="home-page-popular-dest home-page-content ">

     <h2>Destinations for future trips</h2>
  
        <section class="img-container flex">

            <el-card class="card" :body-style="{ padding: '0px' }">
            <img src="https://a0.muscache.com/im/pictures/55b99138-dc87-406a-86ef-89c2dc6f713b.jpg?aki_policy=large" class="image">
            <div style="padding: 14px;">
                <p>New York</p>
                <div class="bottom clearfix">
                </div>
            </div>
          </el-card>

            <el-card class="card" :body-style="{ padding: '0px' }">
            <img src="https://media.cntraveller.in/wp-content/uploads/2018/09/Tokyo-Shibuya-neon-lights-1366x768.jpg" class="image">
            <div style="padding: 14px;">
                 <p>Tokyo</p>
                <div class="bottom clearfix">
                </div>
            </div>
        </el-card>


            <el-card class="card" :body-style="{ padding: '0px' }">
            <img src="https://static.timesofisrael.com/www/uploads/2020/02/Untitled-4-6-640x400.jpg" class="image">
            <div style="padding: 14px;">
                <p>Tel Aviv</p>
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