export let campaign = {
    "method": "add",
    "params": {
        "Campaigns": [{
            "TextCampaign": {
                "BiddingStrategy": {
                    "Search": {
                        "BiddingStrategyType": "WB_MAXIMUM_CLICKS",
                        "WbMaximumClicks": {
                            "WeeklySpendLimit": 500000000,
                            "BidCeiling": 500000000
                        }
                    },
                    "Network": {
                        "BiddingStrategyType": "NETWORK_DEFAULT",
                        "NetworkDefault": {
                        }
                    }
                }
            },
            "Name": "Test campaign from postman 3",
            "StartDate": "2021-07-20",
            "EndDate": "2021-08-19"
        }]
    }
}

export let adGroup = {
    "method": "add",
    "params": {
        "AdGroups": [{
            "Name": "AdGroup from postman",
            "CampaignId": 423680,
            "RegionIds": [0]
        }]
    }
}

export let ad = {
    "method": "add",
    "params": {
        "Ads": [{
            "AdGroupId": 4154970,
            "TextAd": {
                "Title": "(string)",
                "Title2": "(string 2)",
                "Text": "string)",
                "Href": "https://github.com/vladtinishov",
                "Mobile": "YES",
                "DisplayUrlPath": "hello",
                "AdImageHash": ""
            }
        }]
    }
}

export let image = {
    "method": "add",
    "params": {
      "AdImages": [{
        "ImageData": "",
        "Name": "myimage"
      }]
    }
  }