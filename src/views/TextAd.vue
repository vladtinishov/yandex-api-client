<template>
  <div class="main">
    <h3>Текстовое объявление</h3>
    <div class="form">
      <div class="inner_form">
        <div class="section">
          <label for="name">Заголовок:</label>
          <input type="text" id="title1" />
        </div>
        <div class="section">
          <label for="name">Заголовок 2:</label>
          <input type="text" id="title2" />
        </div>
        <div class="section">
          <label for="description">Описание:</label>
          <input type="text" id="description" />
        </div>
        <div class="section">
          <label for="href">Ссылка на сайт:</label>
          <input type="text" id="href" />
        </div>
        <div class="section">
          <label for="startDate">Введите дату начала:</label>
          <input type="date" id="startDate">
        </div>
        <div class="section">
          <label for="endDate">Введите дату окочания:</label>
          <input type="date" id="endDate">
        </div>
        <div class="section">
          <label for="file">Выберите изображение:</label>
          <input type="file" @change="addImage" id="file">
        </div>
      </div>
    </div>
    <button @click="create" class="btn btn-outline-primary">Create</button>
  </div>
</template>
<script>
import axios from "axios";
import { campaign, adGroup, ad, image } from "@/queryData.js";
import { auth_data } from "@/auth.js";

export default {
  data() {
    return {
      campaignId: 0,
      adGroupId: 0,
      imageData: "",
    };
  },
  methods: {
    create() {
      // this.createCampaign();
      this.convertFile()
    },
    createCampaign() {
      const startDate = document.getElementById("startDate").value;
      const endDate = document.getElementById("endDate").value;
      campaign.params.Campaigns[0].StartDate = startDate;
      campaign.params.Campaigns[0].EndDate = endDate;
      let instance = axios.create({
        baseURL: "api/",
        headers: {
          Authorization: "Bearer " + auth_data.token,
        },
      });
      instance
        .post("/campaigns", JSON.stringify(campaign))
        .then((data) => {
          this.campaignId = data.data.result.AddResults[0].Id;
          this.createAdGroup(this.campaignId);
          console.log(data.data);
        });
    },
    createAdGroup(campaignId) {
      adGroup.params.AdGroups[0].CampaignId = campaignId;
      let instance = axios.create({
        baseURL: "api/",
        headers: {
          Authorization: "Bearer " + auth_data.token,
        },
      });
      instance
        .post("/adgroups", JSON.stringify(adGroup))
        .then((data) => {
          this.adGroupId = data.data.result.AddResults[0].Id;
          console.log(data.data);
          this.createAd(this.adGroupId);
        });
    },
    createAd(adGroupId) {
      ad.params.Ads[0].AdGroupId = adGroupId;
      ad.params.Ads[0].TextAd.Title = document.getElementById("title1").value;
      ad.params.Ads[0].TextAd.Title2 = document.getElementById("title2").value;
      ad.params.Ads[0].TextAd.Text =
        document.getElementById("description").value;
      ad.params.Ads[0].TextAd.Href = document.getElementById("href").value;

      const instance = axios.create({
        baseURL: "api/",
        headers: {
          Authorization: "Bearer " + auth_data.token,
        },
      });
      instance.post("/ads", JSON.stringify(ad)).then((data) => {
        console.log(data.data);
      });
    },
    addImage() {
      var files = document.getElementById('file').files;
      if (files.length > 0) {
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
          const imageData = reader.result.toString().replace(/^data:(.*,)?/, '');
          image.params.AdImages[0].ImageData = imageData;
          const instance = axios.create({
            baseURL: "api/",
            headers: {
              Authorization: "Bearer " + auth_data.token,
            },
          });
          instance.post("/adimages", JSON.stringify(image)).then((data) => {
            console.log(data.data);
          });
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  width: 100%;
  justify-content: center;
}
.inner_form {
  display: flex;
  flex-direction: column;
  width: 400px;
}
input {
  width: 100%;
}
.section {
  text-align: left;
  margin: 10px 0;
}
.file-input {
  border: none;
}
.btn-outline-primary {
  margin-top: 20px;
}
</style>
