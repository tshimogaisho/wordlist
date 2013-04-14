# data samples in MongoDB

## users
```json
{
  _id: "user1",
  created_at: ISODate("2013-02-24T14:28:23.145Z")
},
{
  _id: "user2",
  created_at: ISODate("2013-02-27T11:44:16.283Z")
}
```

## words

index: {user_id: 1, name: 1},  { "examples.text" : "text" }

```json
{
    _id: "ObjectId("516a248757fdc44dd106699c")",
    user_id: "user1",
    name: "quaint",
    created_at: ISODate("2013-02-24T14:28:23.145Z"),
    updated_at: ISODate("2013-02-24T14:28:23.145Z"),
    pronunciation: "kwéɪnt",
    examples: [
      {
        text: "There are old streets which have many quaint old houses.",
        reference: "jon's dairy",
        url: "http://example.com"
      },
      {
        text: "quaint bed and breakfast",
        reference: "abc dictionary",
        url: "http://example.com"
      },
    ],
    study_time: [
      ISODate("2013-02-24T14:28:23.145Z"),
      ISODate("2013-02-24T14:28:23.145Z"),
      ISODate("2013-02-24T14:28:23.145Z"),
    ],
    last_study_time: ISODate("2013-02-24T14:28:23.145Z")
    tags: ["tag1", "tag2"],
}, ...
```