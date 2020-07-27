<template>
  <section class="review-list">
    <ul>
      <review-preview v-for="review in reviews" :key="review._id" :review="review" />
    </ul>

    <button @click="addReviews">{{showMoreMsg}}</button>
  </section>
</template>
<script>
import ReviewPreview from "@/components/ReviewPreview.vue";
import { reviewService } from '@/services/random-user.service.js';
export default {
  name: "ReviewList",
  props: ["reviews", "house"],
  data() {
    return {
        reviewsAdded: 0,
        isReviewsAdded: false,
    };
  },
  computed: {
      showMoreMsg() {
          if (!this.isReviewsAdded) return 'Show more reviews';
          else return 'Show less reviews'
      }
  },
  methods: {
    addReviews() {
      if (this.isReviewsAdded) {
        this.reviews.splice(-8, 8);
      } else {
        const fakeReviews = [
          {
            _id: _.uniqueId(),
            createdAt: _.random(_.now(), _.now() - 1000 * 60 * 60 * 24 * 365),
            byUser: {
              imgUrl:
                "https://a0.muscache.com/im/pictures/user/34a10a70-e155-4fe4-bae1-ec1bbc4c1434.jpg?im_w=240",
              name: "Elena"
            },
            description:
              `We had very relaxing stay. We could not have been closer to the venue of the wedding we attended nor had a more accommodating host. The ${this.house.type.split(" ").pop()} is beautifully and thoughtfully designed (plenty of hooks and hangers!) and very clean and comfortable. We really appreciated the fridge full of cold water and milk as well as breakfast goodies. We were given useful information about local eateries and although we didn’t travel to central ${this.house.location.name.split(",").slice(1, 2)} there is a wealth of tourist information in the ${this.house.type.split(" ").pop()}. I really enjoyed reading through the guest book and seeing where many of the guests have travelled from, I feel ${this.house.host.name} is a great ambassador for ${this.house.location.name.split(",").slice(1, 2)}! Thank you for everything ${this.house.host.name}. Our stay was the icing on the (wedding) cake!`,
          },
          {
            _id: _.uniqueId(),
            createdAt: _.random(_.now(), _.now() - 1000 * 60 * 60 * 24 * 365),
            byUser: {
              imgUrl:
                "https://a0.muscache.com/im/pictures/user/27f1b4ea-5341-45b3-a228-9a5a8cecc696.jpg?im_w=240",
              name: "Fela"
            },
            description:
              `${this.house.host.name} was a great host and provided extra amenities such as hand gel and face masks which made traveling around ${this.house.location.name.split(",").slice(1, 2)} a lot easier. The place was exactly as pictured & was all we needed during our short stay.`,
          },
          {
            _id: _.uniqueId(),
            createdAt: _.random(_.now(), _.now() - 1000 * 60 * 60 * 24 * 365),
            byUser: {
              imgUrl:
                "https://a0.muscache.com/im/pictures/user/78aecf11-f1d7-48c8-b97e-861fbec570a9.jpg?im_w=240",
              name: "Marann"
            },
            description: `I loved staying at ${this.house.host.name}’s apartment it’s so much better than I expected it to be. ${this.house.host.name} is really nice and helpful and the place is just so great. I recommend so highly and hope to stay again!`,
          },
          {
            _id: _.uniqueId(),
            createdAt: _.random(_.now(), _.now() - 1000 * 60 * 60 * 24 * 365),
            byUser: {
              imgUrl:
                "https://a0.muscache.com/im/users/39526901/profile_pic/1437843471/original.jpg?im_w=240",
              name: "Stuart"
            },
            description:
              `${this.house.host.name}’s ${this.house.type.split(" ").pop()} was great! I would definitely recommend his place to anyone visiting ${this.house.location.name.split(",").slice(1, 2)}!`,
          },
          {
            _id: _.uniqueId(),
            createdAt: _.random(_.now(), _.now() - 1000 * 60 * 60 * 24 * 365),
            byUser: {
              imgUrl:
                "https://a0.muscache.com/im/pictures/user/0a985ca7-1b97-47fa-87be-a448f85f142e.jpg?im_w=240",
              name: "Vanessa"
            },
            description:
              `Loved my stay here! Super convenient location for anyone looking to enjoy ${this.house.location.name.split(",").slice(0,1)} with lots of cute little bars around. I also enjoyed the fact that ${this.house.host.name} allowed me to leave my luggage there during the day after checking out.`,
          },
          {
            _id: _.uniqueId(),
            createdAt: _.random(_.now(), _.now() - 1000 * 60 * 60 * 24 * 365),
            byUser: {
              imgUrl:
                "https://a0.muscache.com/im/pictures/user/dc9ecb83-308c-4bec-b67d-20080bcbc27d.jpg?im_w=240",
              name: "Vishal"
            },
            description:
              `${this.house.host.name} is a great and very kind host. The check in and out was super easy and quick. ${this.house.host.name} replied immediately when we had questions and gave us great recommendations for restaurants. His flat is just lovely and very clean! It’s exactely how it looks on the pics. We really enjoyed our stay and would definitely recommend it to everyone! Thank you ${this.house.host.name}! Kind regards, Vishal.`,
          },
          {
            _id: _.uniqueId(),
            createdAt: _.random(_.now(), _.now() - 1000 * 60 * 60 * 24 * 365),
            byUser: {
              imgUrl:
                "https://a0.muscache.com/im/pictures/user/3e43c3e7-625b-477b-b6b1-eaf70dfae6da.jpg?im_w=240",
              name: "Jenkkul"
            },
            description:
              `${this.house.host.name} and his wife are the kindest people I've ever met. The ${this.house.type.split(" ").pop()} looks exactly like on the pictures and it was really clean. It was close to restaurants, the underground station, bus stop and shops. We really enjoyed our stay there.`,
          },
          {
            _id: _.uniqueId(),
            createdAt: _.random(_.now(), _.now() - 1000 * 60 * 60 * 24 * 365),
            byUser: {
              imgUrl:
                "https://a0.muscache.com/im/pictures/user/366be1a1-0907-4ef7-99ce-188a6d3786c9.jpg?im_w=240",
              name: "Simone"
            },
            description:
              `Be ready for a great experience in ${this.house.location.name.split(",").slice(1, 2)}. Here is a super cosy place, at convenient walking distance from the Time station. The apartment is very cosy, super clean, well furnished and equipped. You really get what you see in the pictures. If you book here, you will not be disappointed and you will want to come back as soon as you can. ${this.house.host.name} is very nice person, always in touch if you need to, full of good advice, well he clearly deserves his Super Host title.`
          },
          
        ];
        fakeReviews.forEach(review => this.reviews.push(review));
      }
      this.isReviewsAdded = !this.isReviewsAdded;
    },
    addReviewsNew() {
      const users = [
        {
          name: "Elena",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/34a10a70-e155-4fe4-bae1-ec1bbc4c1434.jpg?im_w=240"
        },
        {
          name: "Fela",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/27f1b4ea-5341-45b3-a228-9a5a8cecc696.jpg?im_w=240"
        },
        {
          name: "Sarah",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/622f0e8a-db13-4307-b7ef-2f9f74bbb0d8.jpg?im_w=240"
        },
        {
          name: "Marann",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/78aecf11-f1d7-48c8-b97e-861fbec570a9.jpg?im_w=240"
        },
        {
          name: "Stuart",
          imgUrl:
            "https://a0.muscache.com/im/users/39526901/profile_pic/1437843471/original.jpg?im_w=240"
        },
        {
          name: "Vanessa",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/0a985ca7-1b97-47fa-87be-a448f85f142e.jpg?im_w=240"
        },
        {
          name: "Vishal",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/dc9ecb83-308c-4bec-b67d-20080bcbc27d.jpg?im_w=240"
        },
        {
          name: "Simone",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/366be1a1-0907-4ef7-99ce-188a6d3786c9.jpg?im_w=240"
        },
        {
          name: "Jenkkul",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/3e43c3e7-625b-477b-b6b1-eaf70dfae6da.jpg?im_w=240"
        },
        {
          name: "Lydia",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/d9dfd256-b258-44bb-b7f6-0cd91b668639.jpg?im_w=240"
        },
        {
          name: "Jordan",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/e0bf2a05-beca-4b3c-960b-e03086a13af5.jpg?im_w=240"
        },
        {
          name: "Ashley",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/e842c4c1-0443-437a-b88d-3a9f9c2079ea.jpg?im_w=240"
        },
        {
          name: "Raúl",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/a45fd4bf-077c-4cb6-9c29-55d5a8add424.jpg?im_w=240"
        },
        {
          name: "Marylise",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/0451777e-cea3-4620-b85a-43851df9f35f.jpg?im_w=240"
        },
        {
          name: "Orly",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/daa22c64-5712-4f8f-afcf-08a6fd445081.jpg?im_w=240"
        },
        {
          name: "Nicole",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/82136150-e581-404d-be89-bc74c49de82c.jpg?im_w=240"
        },
        {
          name: "Leela",
          imgUrl:
            "https://a0.muscache.com/im/pictures/user/dee35f0a-e3e1-4a7d-b4c3-9cfe7a315bc7.jpg?im_w=240"
        }
      ];
      var descriptions = [
        `We had very relaxing stay. We could not have been closer to the venue of the wedding we attended nor had a more accommodating host. The ${this.house.type.split(" ").pop()} is beautifully and thoughtfully designed (plenty of hooks and hangers!) and very clean and comfortable. We really appreciated the fridge full of cold water and milk as well as breakfast goodies. We were given useful information about local eateries and although we didn’t travel to central ${this.house.location.name.split(",").slice(1, 2)} there is a wealth of tourist information in the ${this.house.type.split(" ").pop()}. I really enjoyed reading through the guest book and seeing where many of the guests have travelled from, I feel ${this.house.host.name} is a great ambassador for ${this.house.location.name.split(",").slice(1, 2)}! Thank you for everything ${this.house.host.name}. Our stay was the icing on the (wedding) cake!`,
        `${this.house.host.name} was a great host and provided extra amenities such as hand gel and face masks which made traveling around ${this.house.location.name.split(",").slice(1, 2)} a lot easier. The place was exactly as pictured & was all we needed during our short stay.`,
        `I loved staying at ${this.house.host.name}’s apartment it’s so much better than I expected it to be. ${this.house.host.name} is really nice and helpful and the place is just so great. I recommend so highly and hope to stay again!`,
        `${this.house.host.name}’s ${this.house.type.split(" ").pop()} was great! I would definitely recommend his place to anyone visiting ${this.house.location.name.split(",").slice(1, 2)}!`,
      ];
      if (this.house.scores.cleanliness >= 4.8) {
        descriptions.push("Very clean and looks exactly like in the picture.");
      }
      if (this.house.scores.cleanliness >= 4.8 && this.house.scores.value >= 4.8) {
        descriptions.push(
          `${this.house.type.split(" ").pop()} nicely laid out, shining clean and tidy. Clearly been thought about very well. Excellent value for money would highly recommend.`
        );
      }
      descriptions.push(
        `Loved my stay here! Super convenient location for anyone looking to enjoy ${this.house.location.name.split(",").slice(0,1)} with lots of cute little bars around. I also enjoyed the fact that ${this.house.host.name} allowed me to leave my luggage there during the day after checking out.`,
        "Great stay! Would return again in the future! Thanks!!!"
      );
      if (this.house.scores.communication >= 4.8) {
        descriptions.push(
          `Thanks, this was very convenient to stay at. The host was great with communication, everything was as explained.`
        );
      }
      descriptions.push(
        `${this.house.host.name} was the perfect host, very attentive and responsive to my requests.`,
        "A fabulous place for a soothing getaway. Would stay again. Absolutely gorgeous. Truly a lovely fresh space with a little magic in it", // NO. 10
        `${this.house.host.name} is a great and very kind host. The check in and out was super easy and quick. ${this.house.host.name} replied immediately when we had questions and gave us great recommendations for restaurants. His flat is just lovely and very clean! It’s exactely how it looks on the pics. We really enjoyed our stay and would definitely recommend it to everyone! Thank you ${this.house.host.name}! Kind regards, ${users[this.reviewsAdded].name}.`,

        `${this.house.host.name} and his wife are the kindest people I've ever met. The ${this.house.type.split(" ").pop()} looks exactly like on the pictures and it was really clean. It was close to restaurants, the underground station, bus stop and shops. We really enjoyed our stay there.`,
        `Amazing attention to detail, great hospitality and fast responses!`,
        `${this.house.host.name} is a brilliant host, the flat is sparkling clean, secure and very cosy! I would definitely recommend it!`,
        `We loved this place!! It is exactly as the pictures show. They also recommended an incredible Indian food restaurant that was our favourite and most affordable meal our entire trip. We would go back to your place again and recommend it - unless you can’t climb steep stairs. They had to the charm.`,
        `Super clean. Great access to the ${this.house.location.name.split(",").slice(1, 2)} underground. Definitely would stay there again if we go to ${this.house.location.name.split(",").slice(1, 2)}!`,
        `Be ready for a great experience in ${this.house.location.name.split(",").slice(1, 2)}. Here is a super cosy place, at convenient walking distance from the Time station. The apartment is very cosy, super clean, well furnished and equipped. You really get what you see in the pictures. If you book here, you will not be disappointed and you will want to come back as soon as you can. ${this.house.host.name} is very nice person, always in touch if you need to, full of good advice, well he clearly deserves his Super Host title.`
        )

      
      
      const reviewTemplate = {
        _id: _.uniqueId(),
        createdAt: _.random(_.now(), _.now() - 1000 * 60 * 60 * 24 * 365),
        byUser: users[this.reviewsAdded],
        description: descriptions[this.reviewsAdded]
      };
      if (
        !this.reviewsAdded >= users.length ||
        !this.reviewsAdded >= descriptions.length
      )
        return;
      console.log('reviewsAdded:', this.reviewsAdded);
      console.log('descriptions left:', descriptions.length - this.reviewsAdded);
      console.log('users left:', users.length - this.reviewsAdded);
      this.reviews.push(reviewTemplate);
      this.reviewsAdded++;

    }
  },
  components: {
    ReviewPreview
  }
};
</script>

<style>
</style>