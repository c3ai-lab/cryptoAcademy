### News-Feed

**URL** : `/api/news-feed?limit=3&offset=0`
**Method** : `GET`
**Auth required** : `YES`

**Header constraints**

```json
{
  "Authorization": "Bearer __JWT__"
}
```

**Data constraints**

```json
{
  "limit": 10,
  "offset": 1
}
```

##### Success Response

**Code** : `200 OK`

**Content examples**

```json
[
  {
    "id": 13484749,
    "newsitem": {
      "kind": "news",
      "domain": "livebitcoinnews.com",
      "source": {
        "title": "Live Bitcoin News",
        "region": "en",
        "domain": "livebitcoinnews.com",
        "path": null
      },
      "title": "WITTY is Building the DeFi Remittance Platform to Become the Crypto Gateway for Africa",
      "publishedAt": null,
      "slug": "WITTY-is-Building-the-DeFi-Remittance-Platform-to-Become-the-Crypto-Gateway-for-Africa",
      "currencies": [
        {
          "code": "BTC",
          "title": "Bitcoin",
          "slug": "bitcoin",
          "url": "https://cryptopanic.com/news/bitcoin/"
        }
      ],
      "id": 13484749,
      "url": "https://cryptopanic.com/news/13484749/WITTY-is-Building-the-DeFi-Remittance-Platform-to-Become-the-Crypto-Gateway-for-Africa"
    },
    "created_at": "2021-11-29T18:20:39.000000Z",
    "updated_at": "2021-11-29T18:20:39.000000Z"
  },
  {
    "id": 13484783,
    "newsitem": {
      "kind": "news",
      "domain": "ambcrypto.com",
      "source": {
        "title": "AMBCrypto",
        "region": "en",
        "domain": "ambcrypto.com",
        "path": null
      },
      "title": "Ethereum’s DeFi debacle and what it actually needs to recover from its plunge",
      "publishedAt": null,
      "slug": "Ethereums-DeFi-debacle-and-what-it-actually-needs-to-recover-from-its-plunge",
      "currencies": [
        {
          "code": "ETH",
          "title": "Ethereum",
          "slug": "ethereum",
          "url": "https://cryptopanic.com/news/ethereum/"
        },
        {
          "code": "SOL",
          "title": "Solana",
          "slug": "solana",
          "url": "https://cryptopanic.com/news/solana/"
        }
      ],
      "id": 13484783,
      "url": "https://cryptopanic.com/news/13484783/Ethereums-DeFi-debacle-and-what-it-actually-needs-to-recover-from-its-plunge"
    },
    "created_at": "2021-11-29T18:20:39.000000Z",
    "updated_at": "2021-11-29T18:20:39.000000Z"
  }
]
```

___
